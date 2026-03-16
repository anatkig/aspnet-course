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
  },
];
