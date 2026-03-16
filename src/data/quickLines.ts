export interface QuickLineChallenge {
  id: string;
  /** Short description of what to do */
  prompt: string;
  /** Lines of code shown above the blank line */
  codeBefore: string[];
  /** Lines of code shown below the blank line */
  codeAfter: string[];
  /** The exact expected answer (trimmed for comparison) */
  answer: string;
  /** Hint shown on request */
  hint: string;
  /** Module ID where this topic is explained */
  moduleId: string;
  /** Short explanation shown after answering */
  explanation: string;
}

export const quickLineChallenges: QuickLineChallenge[] = [
  // --- C# Basics ---
  {
    id: 'ql-1',
    prompt: 'Declare a string variable using var and assign "Hello, World!" to it.',
    codeBefore: [],
    codeAfter: [
      'Console.WriteLine(greeting);',
    ],
    answer: 'var greeting = "Hello, World!";',
    hint: 'Use var for implicit typing: var name = value;',
    moduleId: 'mod-1',
    explanation: 'The var keyword lets the compiler infer the type from the assigned value. Here it infers string.',
  },
  {
    id: 'ql-2',
    prompt: 'Use string interpolation to create a greeting message.',
    codeBefore: [
      'string name = "Alice";',
      'int age = 30;',
    ],
    codeAfter: [
      'Console.WriteLine(message);',
    ],
    answer: 'var message = $"Hello, {name}! You are {age} years old.";',
    hint: 'String interpolation uses $"text {expression}" syntax.',
    moduleId: 'mod-1',
    explanation: 'String interpolation ($"...{expr}...") embeds expressions directly inside string literals for cleaner formatting.',
  },
  {
    id: 'ql-3',
    prompt: 'Use the null-coalescing operator to provide a default value.',
    codeBefore: [
      'string? input = null;',
    ],
    codeAfter: [
      'Console.WriteLine(result); // "default"',
    ],
    answer: 'var result = input ?? "default";',
    hint: 'The ?? operator returns the left side if non-null, otherwise the right side.',
    moduleId: 'mod-1',
    explanation: 'The ?? operator returns the left operand if it is non-null, otherwise it evaluates and returns the right operand.',
  },
  {
    id: 'ql-4',
    prompt: 'Use the null-conditional operator to safely get the string length.',
    codeBefore: [
      'string? text = null;',
    ],
    codeAfter: [
      'Console.WriteLine(length); // null',
    ],
    answer: 'int? length = text?.Length;',
    hint: 'The ?. operator returns null if the left side is null instead of throwing.',
    moduleId: 'mod-1',
    explanation: 'The ?. operator short-circuits to null when the receiver is null, preventing NullReferenceException.',
  },
  {
    id: 'ql-5',
    prompt: 'Declare a record type for a Person with Name and Age.',
    codeBefore: [],
    codeAfter: [
      'var person = new Person("Alice", 30);',
    ],
    answer: 'record Person(string Name, int Age);',
    hint: 'Records: record TypeName(Type Param1, Type Param2);',
    moduleId: 'mod-1',
    explanation: 'Records are immutable reference types with value-based equality, ideal for data transfer objects.',
  },
  // --- Collections & LINQ ---
  {
    id: 'ql-6',
    prompt: 'Use LINQ to filter only even numbers from the list.',
    codeBefore: [
      'var numbers = new List<int> { 1, 2, 3, 4, 5, 6 };',
    ],
    codeAfter: [
      '// evens: [2, 4, 6]',
    ],
    answer: 'var evens = numbers.Where(n => n % 2 == 0).ToList();',
    hint: 'Where() filters elements based on a predicate.',
    moduleId: 'mod-4',
    explanation: 'Where() is a LINQ extension method that filters a sequence, keeping only elements matching the predicate.',
  },
  {
    id: 'ql-7',
    prompt: 'Use LINQ Select to project names to uppercase.',
    codeBefore: [
      'var names = new List<string> { "alice", "bob", "charlie" };',
    ],
    codeAfter: [
      '// upper: ["ALICE", "BOB", "CHARLIE"]',
    ],
    answer: 'var upper = names.Select(n => n.ToUpper()).ToList();',
    hint: 'Select() transforms each element: .Select(x => transform(x)).',
    moduleId: 'mod-4',
    explanation: 'Select() projects each element into a new form using the provided transform function.',
  },
  {
    id: 'ql-8',
    prompt: 'Use LINQ to get the first user whose age is over 18, or null if none.',
    codeBefore: [
      'var users = GetUsers();',
    ],
    codeAfter: [
      '// adult is User? (nullable)',
    ],
    answer: 'var adult = users.FirstOrDefault(u => u.Age > 18);',
    hint: 'FirstOrDefault returns the first match or default (null for reference types).',
    moduleId: 'mod-4',
    explanation: 'FirstOrDefault returns the first element matching the predicate, or default(T) if no match is found.',
  },
  {
    id: 'ql-9',
    prompt: 'Use LINQ to order products by price descending.',
    codeBefore: [
      'var products = GetProducts();',
    ],
    codeAfter: [
      '// sorted from most to least expensive',
    ],
    answer: 'var sorted = products.OrderByDescending(p => p.Price).ToList();',
    hint: 'OrderByDescending() sorts in descending order by the given key.',
    moduleId: 'mod-4',
    explanation: 'OrderByDescending() sorts elements from highest to lowest by the specified key selector.',
  },
  {
    id: 'ql-10',
    prompt: 'Use LINQ to calculate the total price of all items.',
    codeBefore: [
      'var items = GetCartItems();',
    ],
    codeAfter: [
      'Console.WriteLine($"Total: {total}");',
    ],
    answer: 'var total = items.Sum(i => i.Price);',
    hint: 'Sum() calculates the sum of a numeric property.',
    moduleId: 'mod-4',
    explanation: 'Sum() computes the aggregate total of a numeric property across all elements in the collection.',
  },
  // --- Async/Await ---
  {
    id: 'ql-11',
    prompt: 'Make this method async and await the database call.',
    codeBefore: [
      'public async Task<List<Product>> GetProducts()',
      '{',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'return await _db.Products.ToListAsync();',
    hint: 'Use await before the async method call inside an async method.',
    moduleId: 'mod-5',
    explanation: 'The await keyword asynchronously waits for a Task to complete without blocking the thread.',
  },
  {
    id: 'ql-12',
    prompt: 'Run two async tasks in parallel and await both.',
    codeBefore: [
      'var usersTask = GetUsersAsync();',
      'var ordersTask = GetOrdersAsync();',
    ],
    codeAfter: [
      'var users = usersTask.Result;',
      'var orders = ordersTask.Result;',
    ],
    answer: 'await Task.WhenAll(usersTask, ordersTask);',
    hint: 'Task.WhenAll() runs multiple tasks concurrently and awaits all of them.',
    moduleId: 'mod-5',
    explanation: 'Task.WhenAll() creates a task that completes when all provided tasks finish, enabling parallel execution.',
  },
  // --- OOP ---
  {
    id: 'ql-13',
    prompt: 'Define an interface for a repository with a GetById method.',
    codeBefore: [],
    codeAfter: [
      '{',
      '    Task<Product?> GetByIdAsync(int id);',
      '}',
    ],
    answer: 'public interface IProductRepository',
    hint: 'Interfaces use the "interface" keyword. Convention: prefix with I.',
    moduleId: 'mod-3',
    explanation: 'Interfaces define contracts that classes must implement. The I prefix is a C# naming convention.',
  },
  {
    id: 'ql-14',
    prompt: 'Override the ToString method to return a formatted string.',
    codeBefore: [
      'public class Product',
      '{',
      '    public string Name { get; set; }',
      '    public decimal Price { get; set; }',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'public override string ToString() => $"{Name}: ${Price}";',
    hint: 'Use "public override" to override a base class method.',
    moduleId: 'mod-3',
    explanation: 'The override keyword replaces a virtual method from a base class with a new implementation.',
  },
  // --- ASP.NET Core ---
  {
    id: 'ql-15',
    prompt: 'Register a scoped service in the DI container.',
    codeBefore: [
      'var builder = WebApplication.CreateBuilder(args);',
    ],
    codeAfter: [
      'var app = builder.Build();',
    ],
    answer: 'builder.Services.AddScoped<IUserService, UserService>();',
    hint: 'AddScoped<TInterface, TImplementation>() registers a scoped service.',
    moduleId: 'mod-6',
    explanation: 'AddScoped registers a service that is created once per HTTP request and shared within that request.',
  },
  {
    id: 'ql-16',
    prompt: 'Add the authorization middleware in the correct order.',
    codeBefore: [
      'app.UseAuthentication();',
    ],
    codeAfter: [
      'app.MapControllers();',
    ],
    answer: 'app.UseAuthorization();',
    hint: 'UseAuthorization() must come after UseAuthentication().',
    moduleId: 'mod-6',
    explanation: 'Middleware order matters: UseAuthorization must follow UseAuthentication so user identity is established first.',
  },
  {
    id: 'ql-17',
    prompt: 'Create an API endpoint that returns a list of products.',
    codeBefore: [
      '[HttpGet]',
    ],
    codeAfter: [
      '{',
      '    var products = await _service.GetAllAsync();',
      '    return Ok(products);',
      '}',
    ],
    answer: 'public async Task<IActionResult> GetProducts()',
    hint: 'Use async Task<IActionResult> for async controller actions.',
    moduleId: 'mod-7',
    explanation: 'Controller actions return Task<IActionResult> for async operations and use [HttpGet] to handle GET requests.',
  },
  {
    id: 'ql-18',
    prompt: 'Return a 201 Created response with the location of the new resource.',
    codeBefore: [
      '[HttpPost]',
      'public async Task<IActionResult> Create(ProductDto dto)',
      '{',
      '    var product = await _service.CreateAsync(dto);',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);',
    hint: 'CreatedAtAction returns 201 with a Location header pointing to the GET endpoint.',
    moduleId: 'mod-7',
    explanation: 'CreatedAtAction returns a 201 status with a Location header, following REST conventions for resource creation.',
  },
  // --- Entity Framework Core ---
  {
    id: 'ql-19',
    prompt: 'Configure a one-to-many relationship in OnModelCreating.',
    codeBefore: [
      'protected override void OnModelCreating(ModelBuilder modelBuilder)',
      '{',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'modelBuilder.Entity<Order>().HasMany(o => o.Items).WithOne(i => i.Order);',
    hint: 'HasMany().WithOne() configures a one-to-many relationship.',
    moduleId: 'mod-8',
    explanation: 'Fluent API\'s HasMany().WithOne() configures navigation properties for one-to-many relationships in EF Core.',
  },
  {
    id: 'ql-20',
    prompt: 'Use AsNoTracking for a read-only query.',
    codeBefore: [
      'public async Task<List<Product>> GetAll()',
      '{',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'return await _db.Products.AsNoTracking().ToListAsync();',
    hint: 'AsNoTracking() disables change tracking for better read performance.',
    moduleId: 'mod-8',
    explanation: 'AsNoTracking() skips change tracking overhead, improving query performance for read-only scenarios.',
  },
  // --- Authentication ---
  {
    id: 'ql-21',
    prompt: 'Add the [Authorize] attribute with a specific policy.',
    codeBefore: [],
    codeAfter: [
      'public class AdminController : ControllerBase',
      '{',
      '    // admin-only endpoints',
      '}',
    ],
    answer: '[Authorize(Policy = "AdminOnly")]',
    hint: '[Authorize(Policy = "PolicyName")] restricts access based on a policy.',
    moduleId: 'mod-9',
    explanation: 'The [Authorize] attribute with a Policy restricts access to users who satisfy the named authorization policy.',
  },
  {
    id: 'ql-22',
    prompt: 'Get the current user\'s ID from the JWT claims.',
    codeBefore: [
      'public IActionResult GetProfile()',
      '{',
    ],
    codeAfter: [
      '    // use userId',
      '}',
    ],
    answer: 'var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);',
    hint: 'User.FindFirstValue() reads a claim from the authenticated user\'s JWT.',
    moduleId: 'mod-9',
    explanation: 'FindFirstValue extracts a specific claim from the authenticated user\'s ClaimsPrincipal (populated from JWT).',
  },
  // --- Minimal APIs ---
  {
    id: 'ql-23',
    prompt: 'Define a GET endpoint that returns all items using Minimal API syntax.',
    codeBefore: [
      'var app = builder.Build();',
    ],
    codeAfter: [
      'app.Run();',
    ],
    answer: 'app.MapGet("/items", () => items);',
    hint: 'MapGet(path, handler) defines a GET endpoint in Minimal APIs.',
    moduleId: 'mod-15',
    explanation: 'MapGet() registers a route handler for HTTP GET requests in Minimal API style without controllers.',
  },
  {
    id: 'ql-24',
    prompt: 'Create a route group for API versioning.',
    codeBefore: [
      'var app = builder.Build();',
    ],
    codeAfter: [
      'v1.MapGet("/users", () => "v1 users");',
    ],
    answer: 'var v1 = app.MapGroup("/api/v1");',
    hint: 'MapGroup() creates a group with a shared route prefix.',
    moduleId: 'mod-15',
    explanation: 'MapGroup() creates a RouteGroupBuilder with a shared prefix, letting you organize related endpoints together.',
  },
  // --- Testing ---
  {
    id: 'ql-25',
    prompt: 'Write a Theory test method signature with InlineData.',
    codeBefore: [
      '[Theory]',
      '[InlineData(2, 3, 5)]',
      '[InlineData(0, 0, 0)]',
    ],
    codeAfter: [
      '{',
      '    Assert.Equal(expected, a + b);',
      '}',
    ],
    answer: 'public void Add_ReturnsSum(int a, int b, int expected)',
    hint: '[Theory] with [InlineData] runs the test with each set of parameters.',
    moduleId: 'mod-12',
    explanation: '[Theory] tests run multiple times with different data sets provided by [InlineData] attributes.',
  },
  {
    id: 'ql-26',
    prompt: 'Set up a mock to return a specific value.',
    codeBefore: [
      'var mock = new Mock<IUserService>();',
    ],
    codeAfter: [
      'var controller = new UserController(mock.Object);',
    ],
    answer: 'mock.Setup(s => s.GetByIdAsync(1)).ReturnsAsync(new User { Id = 1, Name = "Test" });',
    hint: 'mock.Setup(m => m.Method(args)).ReturnsAsync(value) configures the mock return.',
    moduleId: 'mod-12',
    explanation: 'Moq\'s Setup().ReturnsAsync() configures a mock to return a specific value when a method is called.',
  },
  // --- Patterns ---
  {
    id: 'ql-27',
    prompt: 'Use pattern matching to check the type and extract a value.',
    codeBefore: [
      'object shape = GetShape();',
    ],
    codeAfter: [
      '{',
      '    Console.WriteLine($"Circle with radius {c.Radius}");',
      '}',
    ],
    answer: 'if (shape is Circle c)',
    hint: 'Use "is Type variable" for type pattern matching with declaration.',
    moduleId: 'mod-1',
    explanation: 'The "is" pattern checks the type at runtime and declares a typed variable in one expression.',
  },
  {
    id: 'ql-28',
    prompt: 'Use a switch expression to return a description based on status.',
    codeBefore: [
      'string description = status switch',
      '{',
    ],
    codeAfter: [
      '    "Active" => "Currently active",',
      '    "Inactive" => "Not active",',
      '    _ => "Unknown"',
      '};',
    ],
    answer: '    "Pending" => "Awaiting approval",',
    hint: 'Switch expressions: value => result, with _ as the default case.',
    moduleId: 'mod-1',
    explanation: 'Switch expressions provide concise pattern-based branching, returning a value for each matched case.',
  },
  // --- Configuration ---
  {
    id: 'ql-29',
    prompt: 'Bind a configuration section to the Options pattern.',
    codeBefore: [
      'var builder = WebApplication.CreateBuilder(args);',
    ],
    codeAfter: [
      '// Inject via IOptions<EmailSettings>',
    ],
    answer: 'builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("Email"));',
    hint: 'Configure<T>(section) binds a config section to a strongly-typed class.',
    moduleId: 'mod-11',
    explanation: 'The Options pattern binds configuration sections to POCO classes, injectable via IOptions<T>.',
  },
  {
    id: 'ql-30',
    prompt: 'Read a connection string from configuration.',
    codeBefore: [
      'var builder = WebApplication.CreateBuilder(args);',
    ],
    codeAfter: [
      'builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(conn));',
    ],
    answer: 'var conn = builder.Configuration.GetConnectionString("Default");',
    hint: 'GetConnectionString() reads from the ConnectionStrings section.',
    moduleId: 'mod-11',
    explanation: 'GetConnectionString() reads from the "ConnectionStrings" section in appsettings.json by key name.',
  },
];
