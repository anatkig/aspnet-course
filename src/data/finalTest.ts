import type { QuizQuestion } from '../types';

export const finalTest: QuizQuestion[] = [
  {
    id: 'ft-1',
    question: 'What is the difference between value types and reference types in C#?',
    options: ['Value types are always faster than reference types in every scenario', 'Value types store data directly (stack); reference types store a reference to data on the heap', 'They behave identically and can be used interchangeably', 'Reference types cannot be null'],
    correctAnswer: 1,
    explanation:
      'Value types (int, struct, bool) store data directly, typically on the stack. Reference types (class, string, array) store a reference pointing to data on the heap.',
  },
  {
    id: 'ft-2',
    question: 'What is the purpose of the async/await pattern in C#?',
    options: ['To execute code on multiple threads simultaneously', 'To enable non-blocking asynchronous operations without callbacks', 'To speed up CPU-bound computations', 'To replace exception handling'],
    correctAnswer: 1,
    explanation:
      'async/await allows writing asynchronous code that reads like synchronous code. It frees the calling thread during I/O-bound waits without requiring manual callback management.',
  },
  {
    id: 'ft-3',
    question: 'What are the three DI service lifetimes in ASP.NET Core?',
    options: ['Static, Dynamic, Cached', 'Singleton (one for app), Scoped (one per request), Transient (new each time)', 'Global, Local, Session', 'Permanent, Temporary, Disposable'],
    correctAnswer: 1,
    explanation:
      'Singleton creates one instance for the application lifetime. Scoped creates one per HTTP request. Transient creates a new instance every time the service is resolved.',
  },
  {
    id: 'ft-4',
    question: 'What is the middleware pipeline in ASP.NET Core?',
    options: ['A CI/CD deployment pipeline', 'An ordered chain of components that process HTTP requests and responses', 'A database query pipeline', 'A logging pipeline'],
    correctAnswer: 1,
    explanation:
      'The middleware pipeline is an ordered sequence of components. Each can process the request, modify it, or pass it to the next middleware. Order matters: authentication before authorization, etc.',
  },
  {
    id: 'ft-5',
    question: 'What happens if you call .Result on a Task inside an ASP.NET Core request?',
    options: ['Nothing — it works fine in all cases', 'It can cause a deadlock by blocking the synchronization context', 'It throws an InvalidOperationException', 'It automatically converts to async'],
    correctAnswer: 1,
    explanation:
      'Blocking on .Result can deadlock because the synchronization context thread is blocked waiting for the async operation that needs that same context to complete. Always use await.',
  },
  {
    id: 'ft-6',
    question: 'What is Entity Framework Core and what does DbContext represent?',
    options: ['EF Core is a testing framework; DbContext is a test fixture', 'EF Core is an ORM; DbContext is a session with the database that manages entities', 'EF Core is a web server; DbContext is a request context', 'EF Core is a UI framework; DbContext is a view model'],
    correctAnswer: 1,
    explanation:
      'EF Core is an Object-Relational Mapper. DbContext represents a session with the database — it tracks entities, manages change detection, and coordinates saving changes.',
  },
  {
    id: 'ft-7',
    question: 'What is the purpose of the [Authorize] attribute?',
    options: ['To generate JWT tokens', 'To restrict access to authenticated/authorized users on controllers or actions', 'To configure database permissions', 'To enable CORS'],
    correctAnswer: 1,
    explanation:
      '[Authorize] restricts access to authenticated users. It supports policies and roles: [Authorize(Policy = "Admin")] or [Authorize(Roles = "Manager")].',
  },
  {
    id: 'ft-8',
    question: 'What is the Options pattern and why use it?',
    options: ['A pattern for optional method parameters', 'A way to bind configuration sections to strongly-typed classes via IOptions<T>', 'A pattern for nullable value types', 'A UI pattern for dropdown menus'],
    correctAnswer: 1,
    explanation:
      'The Options pattern binds configuration from appsettings.json to strongly-typed classes, providing type safety, validation, and easy testing.',
  },
  {
    id: 'ft-9',
    question: 'What is the difference between Include() and AsNoTracking() in EF Core?',
    options: ['They do the same thing', 'Include() eager-loads related entities; AsNoTracking() disables change tracking for read-only queries', 'Include() is for filtering; AsNoTracking() is for sorting', 'Neither affects query performance'],
    correctAnswer: 1,
    explanation:
      'Include() eager-loads navigation properties in a single query. AsNoTracking() skips change tracking, improving performance for read-only scenarios.',
  },
  {
    id: 'ft-10',
    question: 'What is SignalR and when would you use it?',
    options: ['A CSS framework for animations', 'A library for real-time bidirectional communication — chat, live updates, notifications', 'A database driver', 'A logging framework'],
    correctAnswer: 1,
    explanation:
      'SignalR enables real-time communication via WebSockets (with fallbacks). Use it for chat, live dashboards, notifications, and collaborative features.',
  },
  {
    id: 'ft-11',
    question: 'What is the difference between [Fact] and [Theory] in xUnit?',
    options: ['[Fact] is for integration tests; [Theory] is for unit tests', '[Fact] runs once with no parameters; [Theory] runs multiple times with different data sets', 'They are identical', '[Theory] is deprecated'],
    correctAnswer: 1,
    explanation:
      '[Fact] marks a test that runs once. [Theory] combined with [InlineData] runs the test multiple times with different input data.',
  },
  {
    id: 'ft-12',
    question: 'What is the purpose of a DTO in an API?',
    options: ['To store data in the database', 'To shape data for API input/output, separating the API contract from internal models', 'To define database tables', 'To configure routing'],
    correctAnswer: 1,
    explanation:
      'DTOs (Data Transfer Objects) define the shape of API requests/responses, preventing exposure of internal entity details and enabling independent evolution.',
  },
  {
    id: 'ft-13',
    question: 'How does model binding work in ASP.NET Core?',
    options: ['It requires manual parsing of all HTTP request data', 'It automatically maps HTTP request data (route, query, body, headers) to action parameters', 'It only works with JSON bodies', 'It requires explicit deserialization code in every action'],
    correctAnswer: 1,
    explanation:
      'Model binding automatically maps data from route values, query strings, request body, headers, and form data to action method parameters.',
  },
  {
    id: 'ft-14',
    question: 'What is the purpose of global exception handling middleware?',
    options: ['To prevent all exceptions from occurring', 'To catch unhandled exceptions and return consistent error responses', 'To log exceptions to the database only', 'To send error emails'],
    correctAnswer: 1,
    explanation:
      'Global exception handling middleware catches unhandled exceptions, logs them, and returns consistent error responses (e.g., ProblemDetails) without exposing internal details.',
  },
  {
    id: 'ft-15',
    question: 'What is a Minimal API and when would you use it?',
    options: ['A reduced version of .NET with fewer features', 'A lightweight approach to building HTTP APIs without controllers — ideal for simple services', 'A mobile-only API framework', 'A testing API'],
    correctAnswer: 1,
    explanation:
      'Minimal APIs define endpoints directly in Program.cs using MapGet/MapPost. They reduce boilerplate for simple APIs while still supporting DI, validation, and filters.',
  },
  {
    id: 'ft-16',
    question: 'What is the purpose of CORS configuration in ASP.NET Core?',
    options: ['To compress HTTP responses', 'To control which origins, methods, and headers are allowed for cross-origin requests', 'To cache static files', 'To configure SSL certificates'],
    correctAnswer: 1,
    explanation:
      'CORS (Cross-Origin Resource Sharing) configures which external origins can access your API, which HTTP methods are allowed, and which headers can be sent.',
  },
  {
    id: 'ft-17',
    question: 'Why use multi-stage Docker builds for ASP.NET Core apps?',
    options: ['They enable running multiple apps in one container', 'They produce smaller final images by excluding SDK/build tools from the runtime image', 'They are required for .NET apps', 'They improve code quality'],
    correctAnswer: 1,
    explanation:
      'Multi-stage builds use the full SDK image for building and the smaller runtime image for the final container, reducing image size from ~700MB to ~200MB or less.',
  },
  {
    id: 'ft-18',
    question: 'What is a BackgroundService in ASP.NET Core?',
    options: ['A service that runs in the browser', 'An abstract class for long-running background tasks within the application host', 'A JavaScript service worker', 'A database background process'],
    correctAnswer: 1,
    explanation:
      'BackgroundService implements IHostedService and provides ExecuteAsync for running background work (queue processing, scheduled tasks) alongside the web application.',
  },
  {
    id: 'ft-19',
    question: 'What is the Blazor @bind directive?',
    options: ['CSS class binding', 'Two-way data binding between a C# field and an HTML element', 'Route parameter binding', 'Dependency injection binding'],
    correctAnswer: 1,
    explanation:
      '@bind creates two-way data binding — UI changes update the C# field and field changes update the UI, similar to v-model in Vue or [(ngModel)] in Angular.',
  },
  {
    id: 'ft-20',
    question: 'What is the difference between IMemoryCache and IDistributedCache?',
    options: ['No difference', 'IMemoryCache is in-process; IDistributedCache uses an external store (Redis) shared across servers', 'IDistributedCache is always faster', 'IMemoryCache requires configuration'],
    correctAnswer: 1,
    explanation:
      'IMemoryCache stores data in the application process memory (single server). IDistributedCache uses external stores like Redis, enabling caching across multiple server instances.',
  },
  {
    id: 'ft-21',
    question: 'What is the purpose of health checks in ASP.NET Core?',
    options: ['To monitor developer health', 'To expose app and dependency health status for load balancers and orchestrators', 'To check code quality metrics', 'To validate HTML markup'],
    correctAnswer: 1,
    explanation:
      'Health checks expose endpoints (/healthz) that orchestrators (Kubernetes) and load balancers use to determine if the application is ready to serve traffic.',
  },
  {
    id: 'ft-22',
    question: 'What is the ASPNETCORE_ENVIRONMENT variable used for?',
    options: ['To set the CPU architecture', 'To determine which configuration is loaded and enable environment-specific behavior', 'To configure the IDE', 'To set the .NET version'],
    correctAnswer: 1,
    explanation:
      'ASPNETCORE_ENVIRONMENT controls which appsettings.{Environment}.json is loaded and enables checks like IsDevelopment() for conditional middleware.',
  },
  {
    id: 'ft-23',
    question: 'What is LINQ and why is it powerful?',
    options: ['A logging library', 'Language Integrated Query — provides consistent query syntax for any data source in C#', 'A testing framework', 'A dependency injection library'],
    correctAnswer: 1,
    explanation:
      'LINQ integrates query capabilities directly into C#. The same syntax works for in-memory collections, databases (EF Core), XML, and other data sources.',
  },
  {
    id: 'ft-24',
    question: 'What is the record type in C# and when should you use it?',
    options: ['A database record type', 'An immutable reference type with value-based equality — ideal for DTOs and domain values', 'A logging record', 'A configuration record'],
    correctAnswer: 1,
    explanation:
      'Records provide value-based equality, concise syntax (positional records), immutability by default, and built-in ToString. Perfect for DTOs and immutable data models.',
  },
  {
    id: 'ft-25',
    question: 'What is the purpose of EF Core migrations?',
    options: ['Migrating applications between servers', 'Incrementally updating the database schema to match changes in the C# data model', 'Migrating from .NET Framework to .NET Core', 'Moving data between databases'],
    correctAnswer: 1,
    explanation:
      'Migrations generate code that evolves the database schema incrementally, keeping it synchronized with your entity classes without losing data.',
  },
  {
    id: 'ft-26',
    question: 'What is the difference between Blazor Server and Blazor WebAssembly?',
    options: ['No difference', 'Server processes C# on the server with SignalR UI updates; WASM runs .NET in the browser', 'Blazor Server only supports static pages', 'WASM requires Node.js'],
    correctAnswer: 1,
    explanation:
      'Blazor Server runs C# on the server and uses SignalR to send UI diffs to the client. Blazor WASM downloads the .NET runtime to the browser and executes C# locally.',
  },
  {
    id: 'ft-27',
    question: 'What is the Channel<T> class used for?',
    options: ['HTTP communication channels', 'A thread-safe producer-consumer queue for async background processing', 'SignalR hub channels', 'Database connection channels'],
    correctAnswer: 1,
    explanation:
      'Channel<T> provides a high-performance, thread-safe producer-consumer data structure, ideal for queueing work items for background processing.',
  },
  {
    id: 'ft-28',
    question: 'What is the purpose of the IServiceScopeFactory in a BackgroundService?',
    options: ['To create new service registrations at runtime', 'To create DI scopes for resolving scoped services (like DbContext) in singleton contexts', 'To configure service lifetimes', 'To manage service health checks'],
    correctAnswer: 1,
    explanation:
      'BackgroundService is Singleton, but DbContext is Scoped. IServiceScopeFactory creates a new scope to safely resolve scoped dependencies within the singleton context.',
  },
  {
    id: 'ft-29',
    question: 'What is the purpose of endpoint filters in Minimal APIs?',
    options: ['To filter CSS styles', 'To run logic before/after an endpoint handler — validation, logging, authorization', 'To filter database queries', 'To compress responses'],
    correctAnswer: 1,
    explanation:
      'Endpoint filters run before and after endpoint handlers, enabling cross-cutting concerns like validation, logging, and transformation without modifying the handler.',
  },
  {
    id: 'ft-30',
    question: 'What is structured logging and why is it important?',
    options: ['Logging with proper indentation', 'Logging with named parameters that can be queried and analyzed programmatically', 'Logging only error messages', 'Logging to structured databases'],
    correctAnswer: 1,
    explanation:
      'Structured logging captures log data as name-value pairs (not just strings), enabling powerful querying, filtering, and analysis in tools like Seq, Application Insights, or ELK.',
  },
];
