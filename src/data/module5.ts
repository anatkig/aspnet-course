import type { Module } from '../types';

export const module5: Module = {
  id: 'mod-5',
  title: 'Async Programming & Exception Handling',
  description:
    'Learn async/await patterns, Task-based programming, and robust exception handling in C#.',
  topics: [
    {
      id: 'mod5-t1',
      title: 'Async/Await Fundamentals',
      explanation: `## Asynchronous Programming

Async programming prevents blocking the calling thread during I/O operations.

\`\`\`csharp
public async Task<string> FetchDataAsync(string url)
{
    using var client = new HttpClient();
    string data = await client.GetStringAsync(url);
    return data;
}
\`\`\`

### Key Concepts

1. **async** — marks a method as asynchronous
2. **await** — suspends execution until the Task completes
3. **Task** — represents an asynchronous operation (void return)
4. **Task<T>** — represents an async operation returning T

### Return Types

\`\`\`csharp
// Returns nothing
async Task DoWorkAsync() { await Task.Delay(1000); }

// Returns a value
async Task<int> GetValueAsync() { return await Task.FromResult(42); }

// Fire-and-forget (avoid in most cases)
async void OnButtonClick() { await DoWorkAsync(); }
\`\`\`

### Common Patterns

\`\`\`csharp
// Parallel execution
Task<string> task1 = FetchDataAsync("url1");
Task<string> task2 = FetchDataAsync("url2");
string[] results = await Task.WhenAll(task1, task2);

// First to complete
Task<string> fastest = await Task.WhenAny(task1, task2);

// With timeout
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
await DoWorkAsync(cts.Token);
\`\`\`

> **Rule**: Never use \`.Result\` or \`.Wait()\` on tasks — it can cause deadlocks. Always use \`await\`.`,
      tasks: [{
        description:
          'Create an async method that simulates downloading files. It should accept a list of file names, "download" each with a random delay (Task.Delay), and report progress. Use Task.WhenAll to download them in parallel.',
        starterCode: `using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class Program
{
    static async Task DownloadFileAsync(string fileName)
    {
        // TODO: Simulate download with random delay
        // TODO: Print completion message
    }

    static async Task Main()
    {
        var files = new[] { "report.pdf", "data.csv", "image.png", "backup.zip" };
        // TODO: Download all files in parallel using Task.WhenAll
    }
}`,
        solution: `using System;
using System.Threading.Tasks;

class Program
{
    static async Task DownloadFileAsync(string fileName)
    {
        var delay = new Random().Next(500, 3000);
        Console.WriteLine($"Starting download: {fileName}");
        await Task.Delay(delay);
        Console.WriteLine($"Completed: {fileName} ({delay}ms)");
    }

    static async Task Main()
    {
        var files = new[] { "report.pdf", "data.csv", "image.png", "backup.zip" };

        var tasks = new List<Task>();
        foreach (var file in files)
            tasks.Add(DownloadFileAsync(file));

        await Task.WhenAll(tasks);
        Console.WriteLine("All downloads complete!");
    }
}`,
        hints: [
          'Use Task.Delay(milliseconds) to simulate work',
          'Create a Task for each file and collect them in a list',
          'Task.WhenAll runs all tasks concurrently and awaits all',
        ],
      }],
    },
    {
      id: 'mod5-t2',
      title: 'Exception Handling',
      explanation: `## Exception Handling in C#

### try/catch/finally

\`\`\`csharp
try
{
    int result = 10 / 0;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"Unexpected: {ex.Message}");
}
finally
{
    Console.WriteLine("Always runs");
}
\`\`\`

### Common Exception Types

| Exception | When |
|-----------|------|
| ArgumentNullException | Null argument |
| ArgumentOutOfRangeException | Value outside valid range |
| InvalidOperationException | Invalid state |
| NotImplementedException | Method not yet implemented |
| FileNotFoundException | File does not exist |
| HttpRequestException | HTTP request failure |
| KeyNotFoundException | Dictionary key not found |

### Custom Exceptions

\`\`\`csharp
public class InsufficientFundsException : Exception
{
    public decimal Balance { get; }
    public decimal Amount { get; }

    public InsufficientFundsException(decimal balance, decimal amount)
        : base($"Cannot withdraw {amount:C}. Balance: {balance:C}")
    {
        Balance = balance;
        Amount = amount;
    }
}
\`\`\`

### Exception Filters (C# 6+)

\`\`\`csharp
try { /* ... */ }
catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
{
    Console.WriteLine("Resource not found");
}
\`\`\`

### Best Practices

- Catch **specific** exceptions, not bare \`Exception\`
- Don't use exceptions for control flow
- Always include meaningful messages
- Use \`throw;\` to rethrow (preserves stack trace), not \`throw ex;\``,
      tasks: [{
        description:
          'Create a custom `ValidationException` class with a list of error messages. Write a `ValidateUser` method that validates name (not empty), age (1-150), and email (contains @). Throw ValidationException if any checks fail.',
        starterCode: `using System;
using System.Collections.Generic;

// TODO: Create ValidationException

// TODO: Create ValidateUser method

class Program
{
    static void Main()
    {
        try
        {
            ValidateUser("", -5, "invalid-email");
        }
        catch (ValidationException ex)
        {
            Console.WriteLine($"Validation failed: {ex.Message}");
            foreach (var error in ex.Errors)
                Console.WriteLine($"  - {error}");
        }
    }
}`,
        solution: `using System;
using System.Collections.Generic;

public class ValidationException : Exception
{
    public List<string> Errors { get; }

    public ValidationException(List<string> errors)
        : base($"Validation failed with {errors.Count} error(s).")
    {
        Errors = errors;
    }
}

static void ValidateUser(string name, int age, string email)
{
    var errors = new List<string>();

    if (string.IsNullOrWhiteSpace(name))
        errors.Add("Name is required.");
    if (age < 1 || age > 150)
        errors.Add("Age must be between 1 and 150.");
    if (!email.Contains("@"))
        errors.Add("Email must contain @.");

    if (errors.Count > 0)
        throw new ValidationException(errors);
}`,
        hints: [
          'Inherit from Exception and call base constructor with a message',
          'Collect all errors in a List<string> before throwing',
          'string.IsNullOrWhiteSpace checks for null, empty, or whitespace',
        ],
      }],
    },
    {
      id: 'mod5-t3',
      title: 'CancellationToken & IDisposable',
      explanation: `## CancellationToken

Cancellation tokens allow cooperative cancellation of async operations.

\`\`\`csharp
public async Task ProcessAsync(CancellationToken cancellationToken)
{
    for (int i = 0; i < 100; i++)
    {
        cancellationToken.ThrowIfCancellationRequested();
        await Task.Delay(100, cancellationToken);
        Console.WriteLine($"Step {i + 1}");
    }
}

// Usage
var cts = new CancellationTokenSource();
cts.CancelAfter(TimeSpan.FromSeconds(3));

try
{
    await ProcessAsync(cts.Token);
}
catch (OperationCanceledException)
{
    Console.WriteLine("Operation was cancelled.");
}
\`\`\`

## IDisposable & using

Resources like file handles, database connections, and HTTP clients must be explicitly released.

\`\`\`csharp
// using statement — disposes at end of block
using (var reader = new StreamReader("file.txt"))
{
    string content = reader.ReadToEnd();
}

// using declaration (C# 8+) — disposes at end of scope
using var reader = new StreamReader("file.txt");
string content = reader.ReadToEnd();
\`\`\`

### Implementing IDisposable

\`\`\`csharp
public class DatabaseConnection : IDisposable
{
    private bool _disposed;

    public void Open() { /* ... */ }

    public void Dispose()
    {
        if (!_disposed)
        {
            // Release resources
            _disposed = true;
        }
    }
}
\`\`\``,
      tasks: [{
        description:
          'Create a class `FileProcessor` that implements IDisposable. It should open a (simulated) resource in the constructor and release it in Dispose. Write an async method that uses CancellationToken to process items with a timeout.',
        starterCode: `using System;
using System.Threading;
using System.Threading.Tasks;

// TODO: Create FileProcessor implementing IDisposable

class Program
{
    static async Task Main()
    {
        // TODO: Use FileProcessor with using statement
        // TODO: Process with a 2-second timeout
    }
}`,
        solution: `using System;
using System.Threading;
using System.Threading.Tasks;

public class FileProcessor : IDisposable
{
    private bool _disposed;

    public FileProcessor()
    {
        Console.WriteLine("Resource opened.");
    }

    public async Task ProcessAsync(int itemCount, CancellationToken ct)
    {
        for (int i = 0; i < itemCount; i++)
        {
            ct.ThrowIfCancellationRequested();
            await Task.Delay(500, ct);
            Console.WriteLine($"Processed item {i + 1}");
        }
    }

    public void Dispose()
    {
        if (!_disposed)
        {
            Console.WriteLine("Resource released.");
            _disposed = true;
        }
    }
}

class Program
{
    static async Task Main()
    {
        using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2));
        using var processor = new FileProcessor();

        try
        {
            await processor.ProcessAsync(10, cts.Token);
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Processing cancelled due to timeout.");
        }
    }
}`,
        hints: [
          'Implement IDisposable with a _disposed flag to prevent double disposal',
          'Use CancellationTokenSource with a timeout to auto-cancel',
          'Catch OperationCanceledException when using cancellation tokens',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod5-q1', question: 'What does the await keyword do?', options: ['Blocks the thread until the task completes', 'Suspends the method and returns control to the caller until the task completes', 'Creates a new thread for the task', 'Cancels the current operation'], correctAnswer: 1, explanation: 'await asynchronously suspends the method, freeing the thread. Execution resumes when the task completes.' },
    { id: 'mod5-q2', question: 'Why should you avoid async void methods?', options: ['They are slower than async Task methods', 'Exceptions cannot be caught by the caller', 'They block the calling thread', 'C# does not support async void'], correctAnswer: 1, explanation: 'async void methods cannot propagate exceptions to the caller. Use async Task instead (except for event handlers).' },
    { id: 'mod5-q3', question: 'What is the difference between throw; and throw ex;?', options: ['No difference', 'throw; preserves the original stack trace, throw ex; resets it', 'throw ex; is faster', 'throw; only works in finally blocks'], correctAnswer: 1, explanation: 'throw; preserves the full stack trace. throw ex; resets the stack trace to the current catch block.' },
    { id: 'mod5-q4', question: 'What does IDisposable.Dispose() do?', options: ['Deletes the object from memory immediately', 'Releases unmanaged resources deterministically', 'Calls the garbage collector', 'Marks the object for finalization'], correctAnswer: 1, explanation: 'Dispose releases unmanaged resources (files, connections) in a deterministic way, without waiting for GC.' },
    { id: 'mod5-q5', question: 'What happens when a CancellationToken is cancelled?', options: ['The program terminates', 'An OperationCanceledException is thrown at the next cancellation check', 'The task is silently ignored', 'The thread is aborted immediately'], correctAnswer: 1, explanation: 'ThrowIfCancellationRequested() throws OperationCanceledException when cancellation is requested.' },
  ],
};
