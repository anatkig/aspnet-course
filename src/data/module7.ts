import type { Module } from '../types';

export const module7: Module = {
  id: 'mod-7',
  title: 'Controllers & Routing',
  description:
    'Build RESTful Web APIs with controllers, attribute routing, model binding, and action results.',
  topics: [
    {
      id: 'mod7-t1',
      title: 'Controllers & Actions',
      explanation: `## API Controllers

Controllers group related HTTP endpoints and inherit from \`ControllerBase\`.

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private static readonly List<Product> _products = new()
    {
        new Product(1, "Laptop", 999.99m),
        new Product(2, "Mouse", 29.99m)
    };

    [HttpGet]
    public ActionResult<List<Product>> GetAll()
    {
        return Ok(_products);
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        return product is null ? NotFound() : Ok(product);
    }

    [HttpPost]
    public ActionResult<Product> Create(Product product)
    {
        _products.Add(product);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Product product)
    {
        var index = _products.FindIndex(p => p.Id == id);
        if (index < 0) return NotFound();
        _products[index] = product;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var removed = _products.RemoveAll(p => p.Id == id);
        return removed > 0 ? NoContent() : NotFound();
    }
}

public record Product(int Id, string Name, decimal Price);
\`\`\`

### Common Action Results

| Method | Status Code | Usage |
|--------|-------------|-------|
| Ok() | 200 | Successful GET |
| CreatedAtAction() | 201 | Successful POST |
| NoContent() | 204 | Successful PUT/DELETE |
| BadRequest() | 400 | Invalid input |
| NotFound() | 404 | Resource not found |
| Conflict() | 409 | Duplicate/conflict |`,
      task: {
        description:
          'Create a `TodosController` with full CRUD operations for a Todo model (Id, Title, IsCompleted). Implement GET all, GET by id, POST, PUT, and DELETE endpoints.',
        starterCode: `[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private static List<Todo> _todos = new();
    private static int _nextId = 1;

    // TODO: Implement CRUD endpoints
}

public record Todo(int Id, string Title, bool IsCompleted);`,
        solution: `[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private static List<Todo> _todos = new();
    private static int _nextId = 1;

    [HttpGet]
    public ActionResult<List<Todo>> GetAll() => Ok(_todos);

    [HttpGet("{id}")]
    public ActionResult<Todo> GetById(int id)
    {
        var todo = _todos.FirstOrDefault(t => t.Id == id);
        return todo is null ? NotFound() : Ok(todo);
    }

    [HttpPost]
    public ActionResult<Todo> Create(CreateTodoRequest request)
    {
        var todo = new Todo(_nextId++, request.Title, false);
        _todos.Add(todo);
        return CreatedAtAction(nameof(GetById), new { id = todo.Id }, todo);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Todo todo)
    {
        var index = _todos.FindIndex(t => t.Id == id);
        if (index < 0) return NotFound();
        _todos[index] = todo with { Id = id };
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        return _todos.RemoveAll(t => t.Id == id) > 0 ? NoContent() : NotFound();
    }
}

public record Todo(int Id, string Title, bool IsCompleted);
public record CreateTodoRequest(string Title);`,
        hints: [
          'Use [HttpGet], [HttpPost], etc. to map HTTP methods',
          'CreatedAtAction returns 201 with a Location header',
          'Use a separate request DTO for POST to avoid exposing Id',
        ],
      },
    },
    {
      id: 'mod7-t2',
      title: 'Routing & Model Binding',
      explanation: `## Attribute Routing

\`\`\`csharp
[Route("api/[controller]")]  // /api/orders
public class OrdersController : ControllerBase
{
    [HttpGet("{id}")]              // GET /api/orders/5
    [HttpGet("status/{status}")]   // GET /api/orders/status/pending
    [HttpGet("search")]            // GET /api/orders/search?q=laptop
}
\`\`\`

### Route Constraints

\`\`\`csharp
[HttpGet("{id:int}")]         // Only matches integers
[HttpGet("{name:alpha}")]     // Only alphabetic characters
[HttpGet("{id:min(1)}")]      // Minimum value of 1
[HttpGet("{slug:regex(^[a-z0-9-]+$)}")]  // Custom regex
\`\`\`

### Model Binding Sources

\`\`\`csharp
[HttpPost("{id}")]
public IActionResult Process(
    [FromRoute] int id,           // From URL path
    [FromQuery] string? filter,   // From query string
    [FromBody] OrderRequest body,  // From request body (JSON)
    [FromHeader] string apiKey)   // From HTTP header
{
    // ...
}
\`\`\`

### [ApiController] Behavior

The \`[ApiController]\` attribute adds these automatic behaviors:
- **Automatic model validation** — returns 400 if ModelState is invalid
- **Binding source inference** — complex types from body, simple types from route/query
- **Problem details for errors** — standardized error response format

### Minimal APIs Alternative

\`\`\`csharp
app.MapGet("/products/{id:int}", (int id) => { /* ... */ });
app.MapPost("/products", (Product product) => { /* ... */ });
\`\`\``,
      task: {
        description:
          'Create an endpoint that accepts route parameters, query parameters, and a request body. Build a search endpoint GET /api/products/search that accepts category (route), minPrice & maxPrice (query), and returns filtered results.',
        starterCode: `[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    private static readonly List<Product> _products = new()
    {
        new(1, "Laptop", "Electronics", 999.99m),
        new(2, "Mouse", "Electronics", 29.99m),
        new(3, "Desk", "Furniture", 249.99m),
        new(4, "Chair", "Furniture", 199.99m),
        new(5, "Keyboard", "Electronics", 79.99m)
    };

    // TODO: Create search endpoint with route + query params
}

public record Product(int Id, string Name, string Category, decimal Price);`,
        solution: `[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    private static readonly List<Product> _products = new()
    {
        new(1, "Laptop", "Electronics", 999.99m),
        new(2, "Mouse", "Electronics", 29.99m),
        new(3, "Desk", "Furniture", 249.99m),
        new(4, "Chair", "Furniture", 199.99m),
        new(5, "Keyboard", "Electronics", 79.99m)
    };

    [HttpGet("search/{category}")]
    public ActionResult<List<Product>> Search(
        [FromRoute] string category,
        [FromQuery] decimal? minPrice,
        [FromQuery] decimal? maxPrice)
    {
        var query = _products
            .Where(p => p.Category.Equals(category, StringComparison.OrdinalIgnoreCase));

        if (minPrice.HasValue)
            query = query.Where(p => p.Price >= minPrice.Value);
        if (maxPrice.HasValue)
            query = query.Where(p => p.Price <= maxPrice.Value);

        return Ok(query.ToList());
    }
}

public record Product(int Id, string Name, string Category, decimal Price);`,
        hints: [
          'Use [FromRoute] for path parameters and [FromQuery] for query string',
          'Make query parameters nullable (decimal?) to make them optional',
          'Chain LINQ .Where() calls to build up the filter',
        ],
      },
    },
    {
      id: 'mod7-t3',
      title: 'Validation & DTOs',
      explanation: `## Data Transfer Objects (DTOs)

DTOs separate your API contract from your domain model:

\`\`\`csharp
// Domain model (internal)
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; } // Never expose!
}

// DTO (API contract)
public record UserDto(int Id, string Name, string Email);
public record CreateUserRequest(string Name, string Email, string Password);
\`\`\`

### Model Validation with Data Annotations

\`\`\`csharp
using System.ComponentModel.DataAnnotations;

public class CreateProductRequest
{
    [Required]
    [StringLength(100, MinimumLength = 1)]
    public string Name { get; set; } = "";

    [Range(0.01, 99999.99)]
    public decimal Price { get; set; }

    [Required]
    public string Category { get; set; } = "";

    [Url]
    public string? ImageUrl { get; set; }

    [EmailAddress]
    public string? ContactEmail { get; set; }
}
\`\`\`

### Common Validation Attributes

| Attribute | Purpose |
|-----------|---------|
| [Required] | Field must be present |
| [StringLength(max)] | Max (and optional min) length |
| [Range(min, max)] | Numeric range |
| [EmailAddress] | Valid email format |
| [Url] | Valid URL format |
| [RegularExpression] | Custom regex pattern |
| [Compare] | Must match another property |

### Custom Validation

\`\`\`csharp
public class FutureDateAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext ctx)
    {
        if (value is DateTime date && date <= DateTime.Now)
            return new ValidationResult("Date must be in the future.");
        return ValidationResult.Success;
    }
}
\`\`\``,
      task: {
        description:
          'Create DTOs for a user registration endpoint. Define CreateUserRequest with validation attributes for Name (required, 2-50 chars), Email (required, valid email), and Password (required, min 8 chars). Create a corresponding UserResponse DTO that excludes the password.',
        starterCode: `using System.ComponentModel.DataAnnotations;

// TODO: Create CreateUserRequest with validation
// TODO: Create UserResponse DTO
// TODO: Create a POST endpoint that validates and returns UserResponse`,
        solution: `using System.ComponentModel.DataAnnotations;

public class CreateUserRequest
{
    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Name { get; set; } = "";

    [Required]
    [EmailAddress]
    public string Email { get; set; } = "";

    [Required]
    [MinLength(8)]
    public string Password { get; set; } = "";
}

public record UserResponse(int Id, string Name, string Email, DateTime CreatedAt);

// In controller:
[HttpPost]
public ActionResult<UserResponse> Register(CreateUserRequest request)
{
    // [ApiController] auto-validates — returns 400 if invalid
    var response = new UserResponse(1, request.Name, request.Email, DateTime.UtcNow);
    return CreatedAtAction(nameof(GetById), new { id = 1 }, response);
}`,
        hints: [
          'Use [Required], [StringLength], [EmailAddress], [MinLength] attributes',
          'Create separate request and response DTOs',
          '[ApiController] automatically returns 400 for invalid models',
        ],
      },
    },
  ],
  test: [
    { id: 'mod7-q1', question: 'What HTTP status code does CreatedAtAction return?', options: ['200 OK', '201 Created', '204 No Content', '301 Moved Permanently'], correctAnswer: 1, explanation: 'CreatedAtAction returns 201 Created with a Location header pointing to the new resource.' },
    { id: 'mod7-q2', question: 'What does [ApiController] automatically do for invalid models?', options: ['Throws an exception', 'Returns 400 Bad Request with validation details', 'Ignores validation and proceeds', 'Returns 500 Internal Server Error'], correctAnswer: 1, explanation: '[ApiController] enables automatic model validation and returns 400 with problem details for invalid input.' },
    { id: 'mod7-q3', question: 'What is the purpose of DTOs?', options: ['To directly expose database entities', 'To separate the API contract from internal domain models', 'To slow down the application for security', 'To enforce database constraints'], correctAnswer: 1, explanation: 'DTOs prevent exposing internal details (like password hashes) and decouple the API shape from the data model.' },
    { id: 'mod7-q4', question: 'Where does [FromQuery] bind data from?', options: ['The URL path', 'The HTTP request body', 'The URL query string parameters', 'The HTTP headers'], correctAnswer: 2, explanation: '[FromQuery] binds parameter values from the URL query string, e.g., ?filter=active.' },
    { id: 'mod7-q5', question: 'What does a route constraint like {id:int} do?', options: ['Converts the value to int automatically', 'Only matches if the route segment is a valid integer', 'Throws an error if id is not int', 'Sets the default value to 0'], correctAnswer: 1, explanation: 'Route constraints ensure the route only matches when the segment satisfies the constraint (e.g., is a valid integer).' },
  ],
};
