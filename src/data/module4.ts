import type { Module } from '../types';

export const module4: Module = {
  id: 'mod-4',
  title: 'Collections & LINQ',
  description:
    'Work with generic collections, dictionaries, and master LINQ for querying data.',
  topics: [
    {
      id: 'mod4-t1',
      title: 'Generic Collections',
      explanation: `## Generic Collections

C# provides type-safe collections in \`System.Collections.Generic\`.

### List<T>

\`\`\`csharp
var names = new List<string> { "Alice", "Bob", "Charlie" };
names.Add("Diana");
names.Remove("Bob");
names.Insert(1, "Eve");
Console.WriteLine(names.Count); // 3
Console.WriteLine(names[0]);    // "Alice"

bool hasAlice = names.Contains("Alice"); // true
int idx = names.IndexOf("Eve");          // 1
\`\`\`

### Dictionary<TKey, TValue>

\`\`\`csharp
var ages = new Dictionary<string, int>
{
    ["Alice"] = 30,
    ["Bob"] = 25
};

ages["Charlie"] = 35;
ages.TryGetValue("Alice", out int age); // age = 30

foreach (var kvp in ages)
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
\`\`\`

### HashSet<T>

\`\`\`csharp
var set = new HashSet<int> { 1, 2, 3, 3, 2 };
Console.WriteLine(set.Count); // 3 (no duplicates)
set.Add(4);
bool has = set.Contains(2); // true
\`\`\`

### Queue<T> and Stack<T>

\`\`\`csharp
var queue = new Queue<string>();
queue.Enqueue("First");
queue.Enqueue("Second");
string next = queue.Dequeue(); // "First"

var stack = new Stack<int>();
stack.Push(1);
stack.Push(2);
int top = stack.Pop(); // 2
\`\`\``,
      task: {
        description:
          'Create a phone book using Dictionary<string, string>. Support adding contacts, looking up by name, and listing all contacts sorted by name.',
        starterCode: `using System;
using System.Collections.Generic;

class PhoneBook
{
    private Dictionary<string, string> _contacts = new();

    // TODO: Add method
    // TODO: Lookup method
    // TODO: ListAll method (sorted by name)
}`,
        solution: `using System;
using System.Collections.Generic;
using System.Linq;

class PhoneBook
{
    private Dictionary<string, string> _contacts = new();

    public void Add(string name, string phone)
    {
        _contacts[name] = phone;
    }

    public string? Lookup(string name)
    {
        return _contacts.TryGetValue(name, out var phone) ? phone : null;
    }

    public void ListAll()
    {
        foreach (var kvp in _contacts.OrderBy(c => c.Key))
            Console.WriteLine($"{kvp.Key}: {kvp.Value}");
    }
}`,
        hints: [
          'Use Dictionary<string, string> for name -> phone mapping',
          'TryGetValue avoids exceptions when a key does not exist',
          'OrderBy(c => c.Key) sorts dictionary entries by key',
        ],
      },
    },
    {
      id: 'mod4-t2',
      title: 'LINQ Basics',
      explanation: `## LINQ — Language Integrated Query

LINQ lets you query collections using a fluent, SQL-like syntax.

\`\`\`csharp
using System.Linq;

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Method syntax (fluent)
var evens = numbers.Where(n => n % 2 == 0);
var doubled = numbers.Select(n => n * 2);
var firstThree = numbers.Take(3);
var sorted = numbers.OrderByDescending(n => n);

// Query syntax
var query = from n in numbers
            where n > 5
            orderby n descending
            select n * 10;
\`\`\`

### Common LINQ Methods

| Method | Description |
|--------|-------------|
| Where | Filter elements |
| Select | Transform/project elements |
| OrderBy / OrderByDescending | Sort |
| First / FirstOrDefault | Get first matching element |
| Any / All | Check conditions |
| Count | Count elements |
| Sum / Average / Min / Max | Aggregations |
| GroupBy | Group elements |
| Take / Skip | Pagination |
| Distinct | Remove duplicates |
| ToList / ToArray | Materialize query |

### Chaining

\`\`\`csharp
var result = students
    .Where(s => s.Grade >= 80)
    .OrderBy(s => s.Name)
    .Select(s => new { s.Name, s.Grade })
    .ToList();
\`\`\`

### Deferred Execution

LINQ queries are **lazy** — they execute only when you iterate or materialize:

\`\`\`csharp
var query = numbers.Where(n => n > 5); // not executed yet
var list = query.ToList();             // NOW it executes
\`\`\``,
      task: {
        description:
          'Given a list of students with Name and Grade properties, use LINQ to: (1) find students with grade >= 90, (2) calculate average grade, (3) group by pass/fail (>= 60), (4) find the top 3 students by grade.',
        starterCode: `using System;
using System.Collections.Generic;
using System.Linq;

record Student(string Name, int Grade);

class Program
{
    static void Main()
    {
        var students = new List<Student>
        {
            new("Alice", 95), new("Bob", 72), new("Charlie", 88),
            new("Diana", 60), new("Eve", 45), new("Frank", 91)
        };

        // TODO: 1. Students with grade >= 90
        // TODO: 2. Average grade
        // TODO: 3. Group by pass/fail
        // TODO: 4. Top 3 by grade
    }
}`,
        solution: `using System;
using System.Collections.Generic;
using System.Linq;

record Student(string Name, int Grade);

class Program
{
    static void Main()
    {
        var students = new List<Student>
        {
            new("Alice", 95), new("Bob", 72), new("Charlie", 88),
            new("Diana", 60), new("Eve", 45), new("Frank", 91)
        };

        var honor = students.Where(s => s.Grade >= 90);
        Console.WriteLine("Honor Roll: " + string.Join(", ", honor.Select(s => s.Name)));

        double avg = students.Average(s => s.Grade);
        Console.WriteLine($"Average: {avg:F1}");

        var groups = students.GroupBy(s => s.Grade >= 60 ? "Pass" : "Fail");
        foreach (var g in groups)
            Console.WriteLine($"{g.Key}: {string.Join(", ", g.Select(s => s.Name))}");

        var top3 = students.OrderByDescending(s => s.Grade).Take(3);
        Console.WriteLine("Top 3: " + string.Join(", ", top3.Select(s => $"{s.Name} ({s.Grade})")));
    }
}`,
        hints: [
          'Use .Where() to filter, .Average() to compute average',
          '.GroupBy() creates groups you can iterate with foreach',
          '.OrderByDescending().Take(3) gets the top 3',
        ],
      },
    },
    {
      id: 'mod4-t3',
      title: 'Advanced LINQ',
      explanation: `## Advanced LINQ Techniques

### SelectMany — Flatten Nested Collections

\`\`\`csharp
var departments = new[]
{
    new { Name = "Dev", Employees = new[] { "Alice", "Bob" } },
    new { Name = "QA", Employees = new[] { "Charlie", "Diana" } }
};

var allEmployees = departments.SelectMany(d => d.Employees);
// ["Alice", "Bob", "Charlie", "Diana"]
\`\`\`

### Join

\`\`\`csharp
var orders = new[] { new { Id = 1, CustomerId = 1 }, new { Id = 2, CustomerId = 2 } };
var customers = new[] { new { Id = 1, Name = "Alice" }, new { Id = 2, Name = "Bob" } };

var joined = orders.Join(customers,
    o => o.CustomerId,
    c => c.Id,
    (o, c) => new { OrderId = o.Id, CustomerName = c.Name });
\`\`\`

### Aggregate

\`\`\`csharp
var words = new[] { "Hello", "World", "From", "LINQ" };
string sentence = words.Aggregate((a, b) => $"{a} {b}");
// "Hello World From LINQ"
\`\`\`

### Zip

\`\`\`csharp
var names = new[] { "Alice", "Bob" };
var scores = new[] { 90, 85 };

var pairs = names.Zip(scores, (n, s) => $"{n}: {s}");
// ["Alice: 90", "Bob: 85"]
\`\`\`

### OfType — Filter by Type

\`\`\`csharp
object[] mixed = { 1, "hello", 2, "world", 3 };
var strings = mixed.OfType<string>(); // ["hello", "world"]
\`\`\``,
      task: {
        description:
          'Given a list of orders with nested line items, use SelectMany to get all items, then calculate total revenue, find the most expensive item, and group items by category.',
        starterCode: `using System;
using System.Collections.Generic;
using System.Linq;

record LineItem(string Name, string Category, decimal Price, int Quantity);
record Order(int Id, List<LineItem> Items);

class Program
{
    static void Main()
    {
        var orders = new List<Order>
        {
            new(1, new() { new("Laptop", "Electronics", 999.99m, 1), new("Mouse", "Electronics", 29.99m, 2) }),
            new(2, new() { new("Desk", "Furniture", 249.99m, 1), new("Chair", "Furniture", 199.99m, 1) }),
            new(3, new() { new("Keyboard", "Electronics", 79.99m, 1) })
        };

        // TODO: Flatten all items with SelectMany
        // TODO: Total revenue (Price * Quantity)
        // TODO: Most expensive item
        // TODO: Group by Category
    }
}`,
        solution: `using System;
using System.Collections.Generic;
using System.Linq;

record LineItem(string Name, string Category, decimal Price, int Quantity);
record Order(int Id, List<LineItem> Items);

class Program
{
    static void Main()
    {
        var orders = new List<Order>
        {
            new(1, new() { new("Laptop", "Electronics", 999.99m, 1), new("Mouse", "Electronics", 29.99m, 2) }),
            new(2, new() { new("Desk", "Furniture", 249.99m, 1), new("Chair", "Furniture", 199.99m, 1) }),
            new(3, new() { new("Keyboard", "Electronics", 79.99m, 1) })
        };

        var allItems = orders.SelectMany(o => o.Items);

        decimal totalRevenue = allItems.Sum(i => i.Price * i.Quantity);
        Console.WriteLine($"Total Revenue: {totalRevenue:C}");

        var mostExpensive = allItems.OrderByDescending(i => i.Price).First();
        Console.WriteLine($"Most Expensive: {mostExpensive.Name} ({mostExpensive.Price:C})");

        var byCategory = allItems.GroupBy(i => i.Category);
        foreach (var group in byCategory)
            Console.WriteLine($"{group.Key}: {string.Join(", ", group.Select(i => i.Name))}");
    }
}`,
        hints: [
          'SelectMany(o => o.Items) flattens all line items across orders',
          'Use .Sum(i => i.Price * i.Quantity) for total revenue',
          '.OrderByDescending().First() gets the most expensive item',
        ],
      },
    },
  ],
  test: [
    { id: 'mod4-q1', question: 'What is deferred execution in LINQ?', options: ['LINQ queries run immediately when defined', 'LINQ queries execute only when iterated or materialized', 'LINQ defers errors to runtime instead of compile time', 'LINQ caches results for deferred access'], correctAnswer: 1, explanation: 'LINQ queries are lazy — they are not executed until you enumerate them (e.g., foreach, ToList).' },
    { id: 'mod4-q2', question: 'Which LINQ method flattens nested collections?', options: ['Select', 'SelectMany', 'Flatten', 'Aggregate'], correctAnswer: 1, explanation: 'SelectMany projects each element to a collection and flattens all results into one sequence.' },
    { id: 'mod4-q3', question: 'What does HashSet<T> guarantee?', options: ['Sorted order of elements', 'No duplicate elements', 'Thread safety', 'Fixed capacity'], correctAnswer: 1, explanation: 'HashSet<T> stores only unique elements. Adding a duplicate is silently ignored.' },
    { id: 'mod4-q4', question: 'What is the time complexity of Dictionary<TKey, TValue> lookup?', options: ['O(n)', 'O(log n)', 'O(1) average', 'O(n log n)'], correctAnswer: 2, explanation: 'Dictionary uses a hash table, providing O(1) average time for lookups.' },
    { id: 'mod4-q5', question: 'What does .FirstOrDefault() return if no elements match?', options: ['Throws an exception', 'Returns default(T) — null for reference types, 0 for int, etc.', 'Returns the last element instead', 'Returns an empty collection'], correctAnswer: 1, explanation: 'FirstOrDefault returns default(T) if no match is found, unlike First which throws.' },
  ],
};
