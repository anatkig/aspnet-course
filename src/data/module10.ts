import type { Module } from '../types';

export const module10: Module = {
  id: 'mod-10',
  title: 'Error Handling & Logging',
  description: 'Implement global error handling, structured logging with Serilog, and health checks.',
  topics: [
    {
      id: 'mod10-t1',
      title: 'Global Error Handling',
      explanation: `## Global Error Handling in ASP.NET Core

### Exception Handling Middleware

\`\`\`csharp
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";

        var error = context.Features.Get<IExceptionHandlerFeature>();
        if (error != null)
        {
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = 500,
                Message = "An unexpected error occurred.",
                Detail = app.Environment.IsDevelopment() ? error.Error.Message : null
            });
        }
    });
});
\`\`\`

### Problem Details (RFC 7807)

\`\`\`csharp
builder.Services.AddProblemDetails(options =>
{
    options.CustomizeProblemDetails = ctx =>
    {
        ctx.ProblemDetails.Extensions["traceId"] = ctx.HttpContext.TraceIdentifier;
    };
});
\`\`\`

### Custom Exception Middleware

\`\`\`csharp
public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (NotFoundException ex)
        {
            _logger.LogWarning(ex, "Resource not found");
            context.Response.StatusCode = 404;
            await context.Response.WriteAsJsonAsync(new { ex.Message });
        }
        catch (ValidationException ex)
        {
            _logger.LogWarning(ex, "Validation error");
            context.Response.StatusCode = 400;
            await context.Response.WriteAsJsonAsync(new { ex.Message, ex.Errors });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception");
            context.Response.StatusCode = 500;
            await context.Response.WriteAsJsonAsync(new { Message = "Internal server error" });
        }
    }
}
\`\`\``,
      task: {
        description: 'Create a custom exception middleware that handles NotFoundException (404), ValidationException (400), and general exceptions (500). Use ILogger for structured logging.',
        starterCode: `public class ExceptionMiddleware
{
    // TODO: Implement exception handling middleware
}`,
        solution: `public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (NotFoundException ex)
        {
            _logger.LogWarning(ex, "Not found: {Message}", ex.Message);
            context.Response.StatusCode = 404;
            await context.Response.WriteAsJsonAsync(new { Error = ex.Message });
        }
        catch (ArgumentException ex)
        {
            _logger.LogWarning(ex, "Bad request: {Message}", ex.Message);
            context.Response.StatusCode = 400;
            await context.Response.WriteAsJsonAsync(new { Error = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception");
            context.Response.StatusCode = 500;
            await context.Response.WriteAsJsonAsync(new { Error = "An unexpected error occurred." });
        }
    }
}

public class NotFoundException : Exception
{
    public NotFoundException(string message) : base(message) { }
}`,
        hints: [
          'Wrap _next(context) in a try/catch block',
          'Set context.Response.StatusCode before writing the response',
          'Use structured logging: _logger.LogError(ex, "Template {Param}", value)',
        ],
      },
    },
    {
      id: 'mod10-t2',
      title: 'Structured Logging',
      explanation: `## Logging in ASP.NET Core

### Built-in ILogger

\`\`\`csharp
public class OrderService
{
    private readonly ILogger<OrderService> _logger;

    public OrderService(ILogger<OrderService> logger) => _logger = logger;

    public void ProcessOrder(int orderId)
    {
        _logger.LogInformation("Processing order {OrderId}", orderId);
        // ...
        _logger.LogWarning("Order {OrderId} has no items", orderId);
    }
}
\`\`\`

### Log Levels

| Level | When to use |
|-------|-------------|
| Trace | Very detailed diagnostic info |
| Debug | Development-time debugging |
| Information | General flow of the app |
| Warning | Abnormal or unexpected events |
| Error | Errors that need attention |
| Critical | System failures requiring action |

### Serilog Integration

\`\`\`csharp
// Program.cs
builder.Host.UseSerilog((context, config) =>
{
    config
        .ReadFrom.Configuration(context.Configuration)
        .WriteTo.Console()
        .WriteTo.File("logs/app-.log", rollingInterval: RollingInterval.Day)
        .Enrich.FromLogContext()
        .MinimumLevel.Information();
});

// Request logging middleware
app.UseSerilogRequestLogging();
\`\`\`

### Structured Logging Best Practices

\`\`\`csharp
// Good — structured with named placeholders
_logger.LogInformation("User {UserId} placed order {OrderId}", userId, orderId);

// Bad — string interpolation loses structure
_logger.LogInformation($"User {userId} placed order {orderId}");
\`\`\``,
      task: {
        description: 'Configure Serilog in a Program.cs to log to Console and a rolling file. Add request logging middleware. Create a service that uses ILogger with different log levels.',
        starterCode: `// Program.cs
// TODO: Configure Serilog
// TODO: Add request logging

public class PaymentService
{
    // TODO: Add logging at different levels
}`,
        solution: `// Program.cs
builder.Host.UseSerilog((context, config) =>
{
    config
        .WriteTo.Console()
        .WriteTo.File("logs/app-.log", rollingInterval: RollingInterval.Day)
        .Enrich.FromLogContext()
        .MinimumLevel.Information();
});

var app = builder.Build();
app.UseSerilogRequestLogging();

public class PaymentService
{
    private readonly ILogger<PaymentService> _logger;

    public PaymentService(ILogger<PaymentService> logger) => _logger = logger;

    public bool ProcessPayment(int orderId, decimal amount)
    {
        _logger.LogInformation("Processing payment for Order {OrderId}, Amount: {Amount}", orderId, amount);

        if (amount <= 0)
        {
            _logger.LogWarning("Invalid payment amount {Amount} for Order {OrderId}", amount, orderId);
            return false;
        }

        try
        {
            // Simulate payment processing
            _logger.LogDebug("Connecting to payment gateway for Order {OrderId}", orderId);
            _logger.LogInformation("Payment successful for Order {OrderId}", orderId);
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Payment failed for Order {OrderId}", orderId);
            return false;
        }
    }
}`,
        hints: [
          'Use builder.Host.UseSerilog() to configure Serilog',
          'Use structured logging with named placeholders, not string interpolation',
          'app.UseSerilogRequestLogging() logs HTTP request details automatically',
        ],
      },
    },
    {
      id: 'mod10-t3',
      title: 'Health Checks',
      explanation: `## Health Checks in ASP.NET Core

Health checks verify that your application and its dependencies are running correctly.

\`\`\`csharp
// Program.cs
builder.Services.AddHealthChecks()
    .AddCheck("self", () => HealthCheckResult.Healthy())
    .AddSqlServer(builder.Configuration.GetConnectionString("Default")!)
    .AddRedis(builder.Configuration.GetConnectionString("Redis")!);

app.MapHealthChecks("/health");
\`\`\`

### Custom Health Check

\`\`\`csharp
public class ApiHealthCheck : IHealthCheck
{
    private readonly HttpClient _client;

    public ApiHealthCheck(HttpClient client) => _client = client;

    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var response = await _client.GetAsync("/api/ping", cancellationToken);
            return response.IsSuccessStatusCode
                ? HealthCheckResult.Healthy("API is responsive")
                : HealthCheckResult.Degraded("API returned non-success status");
        }
        catch (Exception ex)
        {
            return HealthCheckResult.Unhealthy("API is unreachable", ex);
        }
    }
}

// Register
builder.Services.AddHealthChecks()
    .AddCheck<ApiHealthCheck>("external-api");
\`\`\``,
      task: {
        description: 'Create a custom health check that verifies a database connection and an external API. Register both checks with different tags (e.g., "db" and "api") and map separate health endpoints.',
        starterCode: `// TODO: Create DatabaseHealthCheck
// TODO: Create ExternalApiHealthCheck
// TODO: Register and map health endpoints`,
        solution: `public class DatabaseHealthCheck : IHealthCheck
{
    private readonly AppDbContext _db;
    public DatabaseHealthCheck(AppDbContext db) => _db = db;

    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context, CancellationToken ct = default)
    {
        try
        {
            await _db.Database.CanConnectAsync(ct);
            return HealthCheckResult.Healthy("Database connection OK");
        }
        catch (Exception ex)
        {
            return HealthCheckResult.Unhealthy("Database unavailable", ex);
        }
    }
}

public class ExternalApiHealthCheck : IHealthCheck
{
    private readonly IHttpClientFactory _httpFactory;
    public ExternalApiHealthCheck(IHttpClientFactory httpFactory) => _httpFactory = httpFactory;

    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context, CancellationToken ct = default)
    {
        var client = _httpFactory.CreateClient();
        try
        {
            var response = await client.GetAsync("https://api.example.com/health", ct);
            return response.IsSuccessStatusCode
                ? HealthCheckResult.Healthy()
                : HealthCheckResult.Degraded();
        }
        catch
        {
            return HealthCheckResult.Unhealthy("External API unreachable");
        }
    }
}

// Program.cs
builder.Services.AddHealthChecks()
    .AddCheck<DatabaseHealthCheck>("database", tags: new[] { "db" })
    .AddCheck<ExternalApiHealthCheck>("external-api", tags: new[] { "api" });

app.MapHealthChecks("/health");
app.MapHealthChecks("/health/db", new HealthCheckOptions
{
    Predicate = check => check.Tags.Contains("db")
});`,
        hints: [
          'Implement IHealthCheck and return HealthCheckResult.Healthy/Degraded/Unhealthy',
          'Use tags to group checks and filter them in different endpoints',
          'Use CanConnectAsync() to verify database connectivity',
        ],
      },
    },
  ],
  test: [
    { id: 'mod10-q1', question: 'Why use structured logging instead of string interpolation?', options: ['String interpolation is slower', 'Structured logging preserves parameter names for searching and filtering in log aggregation tools', 'String interpolation does not work with ILogger', 'No real difference'], correctAnswer: 1, explanation: 'Structured logging preserves parameter names and values separately, making logs searchable and filterable.' },
    { id: 'mod10-q2', question: 'What does UseExceptionHandler middleware do?', options: ['Logs all exceptions to the console', 'Catches unhandled exceptions and produces error responses', 'Prevents exceptions from being thrown', 'Sends exceptions to an external monitoring service'], correctAnswer: 1, explanation: 'UseExceptionHandler catches unhandled exceptions in the pipeline and produces an appropriate error response.' },
    { id: 'mod10-q3', question: 'What are the three health check statuses?', options: ['Good, Bad, Unknown', 'Healthy, Degraded, Unhealthy', 'Up, Down, Maintenance', 'Green, Yellow, Red'], correctAnswer: 1, explanation: 'Health checks return Healthy (working), Degraded (working with issues), or Unhealthy (not working).' },
    { id: 'mod10-q4', question: 'Where should exception handling middleware be placed in the pipeline?', options: ['At the very end', 'At the very beginning (first middleware)', 'After authentication', 'It does not matter'], correctAnswer: 1, explanation: 'Exception handling should be first so it catches exceptions from all subsequent middleware.' },
    { id: 'mod10-q5', question: 'What log level is appropriate for an unhandled exception?', options: ['Debug', 'Information', 'Warning', 'Error or Critical'], correctAnswer: 3, explanation: 'Unhandled exceptions indicate errors that need attention — use Error or Critical level.' },
  ],
};
