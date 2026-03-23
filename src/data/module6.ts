import type { Module } from '../types';

export const module6: Module = {
  id: 'mod-6',
  title: 'ASP.NET Core Fundamentals',
  description:
    'Introduction to ASP.NET Core: project structure, middleware pipeline, configuration, and dependency injection.',
  topics: [
    {
      id: 'mod6-t1',
      title: 'ASP.NET Core Project Structure',
      explanation: `## ASP.NET Core Project Structure

A typical ASP.NET Core Web API project:

\`\`\`
MyWebApi/
├── Program.cs           # App entry point & configuration
├── appsettings.json     # Configuration settings
├── appsettings.Development.json
├── MyWebApi.csproj      # Project file
├── Controllers/
│   └── WeatherController.cs
├── Models/
│   └── WeatherForecast.cs
├── Services/
│   └── WeatherService.cs
└── Properties/
    └── launchSettings.json
\`\`\`

### Program.cs (Minimal API style)

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the DI container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
\`\`\`

### .csproj File

\`\`\`xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
  </PropertyGroup>
</Project>
\`\`\`

### Key Concepts

- **WebApplication.CreateBuilder** — sets up hosting, config, logging, DI
- **builder.Services** — registers services for dependency injection
- **app.Use*()** — adds middleware to the pipeline
- **app.Map*()** — maps endpoints (controllers or minimal APIs)`,
      tasks: [{
        description:
          'Write a minimal Program.cs that creates a Web API with one GET endpoint "/api/hello" that returns a JSON object with a greeting message and the current UTC time.',
        starterCode: `// Program.cs
var builder = WebApplication.CreateBuilder(args);

// TODO: Build the app

// TODO: Map a GET endpoint "/api/hello"

// TODO: Run the app`,
        solution: `var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/hello", () => new
{
    Message = "Hello from ASP.NET Core!",
    Timestamp = DateTime.UtcNow
});

app.Run();`,
        hints: [
          'Use app.MapGet() for minimal API endpoints',
          'Return an anonymous object — ASP.NET serializes it to JSON automatically',
          'DateTime.UtcNow gets the current UTC time',
        ],
      }],
    },
    {
      id: 'mod6-t2',
      title: 'Middleware Pipeline',
      explanation: `## Middleware in ASP.NET Core

Middleware are components that handle HTTP requests and responses in a **pipeline**.

\`\`\`
Request → Middleware 1 → Middleware 2 → Middleware 3 → Endpoint
Response ← Middleware 1 ← Middleware 2 ← Middleware 3 ←
\`\`\`

### Built-in Middleware

\`\`\`csharp
var app = builder.Build();

app.UseExceptionHandler("/error");  // Global error handling
app.UseHttpsRedirection();          // Redirect HTTP to HTTPS
app.UseStaticFiles();               // Serve static files
app.UseRouting();                   // Route matching
app.UseAuthentication();            // Who are you?
app.UseAuthorization();             // Are you allowed?
app.MapControllers();               // Map endpoints
\`\`\`

> **Order matters!** Middleware executes in the order it's added.

### Custom Middleware

\`\`\`csharp
// Inline middleware
app.Use(async (context, next) =>
{
    Console.WriteLine($"Request: {context.Request.Path}");
    var sw = Stopwatch.StartNew();
    await next();
    sw.Stop();
    Console.WriteLine($"Response: {sw.ElapsedMilliseconds}ms");
});

// Class-based middleware
public class RequestTimingMiddleware
{
    private readonly RequestDelegate _next;

    public RequestTimingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var sw = Stopwatch.StartNew();
        await _next(context);
        sw.Stop();
        context.Response.Headers["X-Response-Time"] = $"{sw.ElapsedMilliseconds}ms";
    }
}

// Register
app.UseMiddleware<RequestTimingMiddleware>();
\`\`\`

### Terminal Middleware

\`\`\`csharp
app.Run(async context =>
{
    await context.Response.WriteAsync("End of pipeline");
});
\`\`\``,
      tasks: [{
        description:
          'Create a custom middleware class `RequestLoggingMiddleware` that logs the HTTP method, path, and response status code. Register it in the pipeline.',
        starterCode: `using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

// TODO: Create RequestLoggingMiddleware class

// In Program.cs:
// TODO: Register the middleware`,
        solution: `public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        _logger.LogInformation("Request: {Method} {Path}",
            context.Request.Method, context.Request.Path);

        await _next(context);

        _logger.LogInformation("Response: {StatusCode}",
            context.Response.StatusCode);
    }
}

// In Program.cs:
// app.UseMiddleware<RequestLoggingMiddleware>();`,
        hints: [
          'Accept RequestDelegate in the constructor and call it with await',
          'Use ILogger for structured logging instead of Console.WriteLine',
          'Log before and after calling _next(context)',
        ],
      }],
    },
    {
      id: 'mod6-t3',
      title: 'Dependency Injection',
      explanation: `## Dependency Injection (DI) in ASP.NET Core

DI is a first-class citizen in ASP.NET Core. Instead of creating dependencies manually, you **register** them and let the framework **inject** them.

### Service Lifetimes

| Lifetime | Description |
|----------|-------------|
| Transient | New instance every time it's requested |
| Scoped | One instance per HTTP request |
| Singleton | One instance for the app's lifetime |

\`\`\`csharp
builder.Services.AddTransient<IEmailService, SmtpEmailService>();
builder.Services.AddScoped<IUserRepository, SqlUserRepository>();
builder.Services.AddSingleton<ICacheService, MemoryCacheService>();
\`\`\`

### Constructor Injection

\`\`\`csharp
public class UserController : ControllerBase
{
    private readonly IUserRepository _repo;
    private readonly IEmailService _email;

    public UserController(IUserRepository repo, IEmailService email)
    {
        _repo = repo;
        _email = email;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var user = await _repo.GetByIdAsync(id);
        return user is null ? NotFound() : Ok(user);
    }
}
\`\`\`

### Why DI?

1. **Loose coupling** — classes depend on abstractions, not concrete types
2. **Testability** — easily swap real services with mocks
3. **Maintainability** — change implementations without modifying consumers
4. **Lifetime management** — framework handles creation and disposal

### Registering with Interface Segregation

\`\`\`csharp
// Register
builder.Services.AddScoped<IOrderService, OrderService>();

// Resolve (in controller/service constructor)
public class CheckoutService
{
    private readonly IOrderService _orderService;
    public CheckoutService(IOrderService orderService)
    {
        _orderService = orderService;
    }
}
\`\`\``,
      tasks: [{
        description:
          'Define an `IGreetingService` interface with a `Greet(string name)` method. Create two implementations: `FormalGreetingService` and `CasualGreetingService`. Register one as a scoped service and inject it into a minimal API endpoint.',
        starterCode: `// TODO: Define IGreetingService interface
// TODO: Create FormalGreetingService 
// TODO: Create CasualGreetingService
// TODO: Register and use in Program.cs`,
        solution: `public interface IGreetingService
{
    string Greet(string name);
}

public class FormalGreetingService : IGreetingService
{
    public string Greet(string name) => $"Good day, {name}. How may I assist you?";
}

public class CasualGreetingService : IGreetingService
{
    public string Greet(string name) => $"Hey {name}! What's up?";
}

// Program.cs
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IGreetingService, CasualGreetingService>();

var app = builder.Build();

app.MapGet("/greet/{name}", (string name, IGreetingService greeter) =>
    new { Greeting = greeter.Greet(name) });

app.Run();`,
        hints: [
          'Define the interface first, then implement it',
          'Use builder.Services.AddScoped<Interface, Implementation>()',
          'Minimal API endpoints can accept injected services as parameters',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod6-q1', question: 'What does builder.Services.AddScoped<T>() do?', options: ['Creates a new instance every time', 'Creates one instance per HTTP request', 'Creates one instance for the app lifetime', 'Creates an instance per controller'], correctAnswer: 1, explanation: 'Scoped services are created once per HTTP request scope and disposed at the end of that request.' },
    { id: 'mod6-q2', question: 'Does middleware execution order matter?', options: ['No, ASP.NET Core automatically determines the order', 'Yes, middleware runs in the exact order it is added', 'Only authentication middleware order matters', 'Order only matters in production, not development'], correctAnswer: 1, explanation: 'Middleware runs in the order registered. Authentication must come before Authorization, etc.' },
    { id: 'mod6-q3', question: 'What is the purpose of app.MapControllers()?', options: ['Creates controller classes automatically', 'Maps HTTP requests to controller action methods based on routes', 'Compiles controllers into middleware', 'Validates controller code at startup'], correctAnswer: 1, explanation: 'MapControllers maps incoming HTTP requests to the appropriate controller actions based on route attributes.' },
    { id: 'mod6-q4', question: 'Where should you configure services in ASP.NET Core?', options: ['In the Startup.Configure method', 'Before builder.Build() using builder.Services', 'In the controller constructors', 'In appsettings.json'], correctAnswer: 1, explanation: 'Services are registered on builder.Services before builder.Build() creates the app.' },
    { id: 'mod6-q5', question: 'What is constructor injection?', options: ['Creating objects inside the constructor manually', 'Passing dependencies through the constructor parameters', 'Injecting JavaScript into the constructor', 'A reflection-based way to create objects'], correctAnswer: 1, explanation: 'Constructor injection is the preferred DI pattern where dependencies are provided as constructor parameters.' },
  ],
};
