import type { Module } from '../types';

export const module1: Module = {
  id: 'mod-1',
  title: 'C# Fundamentals',
  description:
    'Learn the core building blocks of C#: syntax, data types, variables, operators, and control flow.',
  topics: [
    {
      id: 'mod1-t1',
      title: 'Hello World & Program Structure',
      explanation: `## Your First C# Program

Every C# application starts with a **Program** class and a **Main** method (or top-level statements in C# 9+).

\`\`\`csharp
// Traditional approach
using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
\`\`\`

### Top-Level Statements (C# 9+)

Modern C# allows you to skip the boilerplate:

\`\`\`csharp
// Top-level statements
Console.WriteLine("Hello, World!");
\`\`\`

### Key Concepts

1. **using directives** — import namespaces (\`using System;\`)
2. **namespace** — organize code into logical groups
3. **class** — a blueprint for objects
4. **Main method** — the entry point of a console application
5. **Console.WriteLine** — prints text to the console

### Comments

\`\`\`csharp
// Single-line comment
/* Multi-line
   comment */
/// <summary>XML documentation comment</summary>
\`\`\``,
      tasks: [{
        description:
          'Create a console application that prints your name and age on separate lines using Console.WriteLine.',
        starterCode: `using System;

class Program
{
    static void Main()
    {
        // TODO: Print your name on one line
        // TODO: Print your age on the next line
    }
}`,
        solution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("John Doe");
        Console.WriteLine("25");
    }
}`,
        hints: [
          'Use Console.WriteLine() to print a line of text',
          'Each Console.WriteLine() call adds a newline at the end',
          'Strings are enclosed in double quotes "like this"',
        ],
      }],
    },
    {
      id: 'mod1-t2',
      title: 'Data Types & Variables',
      explanation: `## Data Types in C#

C# is a **strongly-typed** language. Every variable has a type declared at compile time.

### Value Types

| Type | Size | Range | Example |
|------|------|-------|---------|
| int | 4 bytes | -2.1B to 2.1B | \`int age = 25;\` |
| double | 8 bytes | ±5.0e−324 to ±1.7e308 | \`double pi = 3.14;\` |
| bool | 1 byte | true / false | \`bool isActive = true;\` |
| char | 2 bytes | Unicode char | \`char grade = 'A';\` |
| decimal | 16 bytes | High precision | \`decimal price = 29.99m;\` |
| float | 4 bytes | 7 digits precision | \`float temp = 36.6f;\` |
| long | 8 bytes | Very large integers | \`long big = 9999999999L;\` |

### Reference Types

\`\`\`csharp
string name = "Alice";        // immutable sequence of characters
object obj = 42;               // base type of all types
int[] numbers = { 1, 2, 3 };  // array
\`\`\`

### var Keyword

The compiler infers the type from the assigned value:

\`\`\`csharp
var count = 10;        // int
var message = "Hi";    // string
var ratio = 0.5;       // double
\`\`\`

### Constants

\`\`\`csharp
const double Pi = 3.14159;
const string AppName = "MyApp";
\`\`\`

### Nullable Value Types

\`\`\`csharp
int? maybeNull = null;
double? temperature = 36.6;
\`\`\``,
      tasks: [{
        description:
          'Declare variables of different types: an int for age, a string for name, a double for salary, a bool for isEmployed, and a decimal for accountBalance. Print each with a label.',
        starterCode: `using System;

class Program
{
    static void Main()
    {
        // TODO: Declare variables of different types
        // TODO: Print each with a label, e.g. "Name: Alice"
    }
}`,
        solution: `using System;

class Program
{
    static void Main()
    {
        int age = 30;
        string name = "Alice";
        double salary = 75000.50;
        bool isEmployed = true;
        decimal accountBalance = 12345.67m;

        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Age: {age}");
        Console.WriteLine($"Salary: {salary}");
        Console.WriteLine($"Employed: {isEmployed}");
        Console.WriteLine($"Balance: {accountBalance}");
    }
}`,
        hints: [
          'Use $ before a string for string interpolation: $"text {variable}"',
          'Decimal literals need the m suffix: 29.99m',
          'Use the appropriate type for each piece of data',
        ],
      }],
    },
    {
      id: 'mod1-t3',
      title: 'Operators & Expressions',
      explanation: `## Operators in C#

### Arithmetic Operators

\`\`\`csharp
int a = 10, b = 3;
Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3 (integer division)
Console.WriteLine(a % b);  // 1 (remainder)
\`\`\`

### Comparison Operators

\`\`\`csharp
bool result;
result = (5 == 5);   // true
result = (5 != 3);   // true
result = (5 > 3);    // true
result = (5 >= 5);   // true
result = (5 < 10);   // true
result = (5 <= 5);   // true
\`\`\`

### Logical Operators

\`\`\`csharp
bool x = true, y = false;
Console.WriteLine(x && y);  // false (AND)
Console.WriteLine(x || y);  // true  (OR)
Console.WriteLine(!x);      // false (NOT)
\`\`\`

### Null-Coalescing & Null-Conditional

\`\`\`csharp
string? name = null;
string displayName = name ?? "Unknown";  // "Unknown"

int? length = name?.Length;  // null (no exception)
\`\`\`

### Ternary Operator

\`\`\`csharp
int age = 20;
string status = age >= 18 ? "Adult" : "Minor";
\`\`\``,
      tasks: [{
        description:
          'Write a program that takes two integers, performs all arithmetic operations (+, -, *, /, %), and prints the results. Also use the ternary operator to check if the first number is even or odd.',
        starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = 17, b = 5;
        // TODO: Perform and print all arithmetic operations
        // TODO: Check if a is even or odd using ternary operator
    }
}`,
        solution: `using System;

class Program
{
    static void Main()
    {
        int a = 17, b = 5;
        Console.WriteLine($"{a} + {b} = {a + b}");
        Console.WriteLine($"{a} - {b} = {a - b}");
        Console.WriteLine($"{a} * {b} = {a * b}");
        Console.WriteLine($"{a} / {b} = {a / b}");
        Console.WriteLine($"{a} % {b} = {a % b}");

        string parity = a % 2 == 0 ? "even" : "odd";
        Console.WriteLine($"{a} is {parity}");
    }
}`,
        hints: [
          'Integer division truncates: 17 / 5 = 3',
          'Use % (modulo) to get the remainder',
          'Ternary syntax: condition ? trueValue : falseValue',
        ],
      }],
    },
    {
      id: 'mod1-t4',
      title: 'Control Flow',
      explanation: `## Control Flow Statements

### if / else if / else

\`\`\`csharp
int score = 85;

if (score >= 90)
    Console.WriteLine("A");
else if (score >= 80)
    Console.WriteLine("B");
else if (score >= 70)
    Console.WriteLine("C");
else
    Console.WriteLine("F");
\`\`\`

### switch Statement

\`\`\`csharp
string day = "Monday";
switch (day)
{
    case "Monday":
    case "Tuesday":
        Console.WriteLine("Early week");
        break;
    case "Friday":
        Console.WriteLine("TGIF!");
        break;
    default:
        Console.WriteLine("Another day");
        break;
}
\`\`\`

### Switch Expressions (C# 8+)

\`\`\`csharp
string result = day switch
{
    "Monday" => "Start of week",
    "Friday" => "End of week",
    _ => "Midweek"
};
\`\`\`

### Loops

\`\`\`csharp
// for loop
for (int i = 0; i < 5; i++)
    Console.WriteLine(i);

// while loop
int count = 0;
while (count < 3)
{
    Console.WriteLine(count);
    count++;
}

// do-while loop
do
{
    Console.WriteLine("Runs at least once");
} while (false);

// foreach loop
string[] fruits = { "Apple", "Banana", "Cherry" };
foreach (string fruit in fruits)
    Console.WriteLine(fruit);
\`\`\``,
      tasks: [{
        description:
          'Write a program that classifies a temperature: below 0 is "Freezing", 0-15 is "Cold", 16-25 is "Mild", 26-35 is "Warm", above 35 is "Hot". Use if/else. Then print numbers 1-10 using a for loop, skipping multiples of 3.',
        starterCode: `using System;

class Program
{
    static void Main()
    {
        int temp = 22;
        // TODO: Classify temperature using if/else

        // TODO: Print 1-10 skipping multiples of 3
    }
}`,
        solution: `using System;

class Program
{
    static void Main()
    {
        int temp = 22;

        if (temp < 0)
            Console.WriteLine("Freezing");
        else if (temp <= 15)
            Console.WriteLine("Cold");
        else if (temp <= 25)
            Console.WriteLine("Mild");
        else if (temp <= 35)
            Console.WriteLine("Warm");
        else
            Console.WriteLine("Hot");

        for (int i = 1; i <= 10; i++)
        {
            if (i % 3 == 0) continue;
            Console.WriteLine(i);
        }
    }
}`,
        hints: [
          'Use else if to chain multiple conditions',
          'Use the continue keyword to skip the current iteration',
          'i % 3 == 0 checks if i is a multiple of 3',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod1-q1', question: 'What is the entry point of a C# console application?', options: ['The first line of code in the file', 'The Main method', 'The constructor of the Program class', 'The using directive'], correctAnswer: 1, explanation: 'The Main method is the entry point where program execution begins.' },
    { id: 'mod1-q2', question: 'Which keyword declares a constant in C#?', options: ['var', 'let', 'const', 'static'], correctAnswer: 2, explanation: 'The const keyword declares compile-time constants that cannot be changed.' },
    { id: 'mod1-q3', question: 'What is the result of 17 / 5 in C# when both operands are int?', options: ['3.4', '3', '4', '3.0'], correctAnswer: 1, explanation: 'Integer division truncates the decimal part. 17 / 5 = 3 with remainder 2.' },
    { id: 'mod1-q4', question: 'Which suffix is required for decimal literals?', options: ['d', 'f', 'm', 'l'], correctAnswer: 2, explanation: 'Decimal literals require the m suffix: 29.99m' },
    { id: 'mod1-q5', question: 'What does the ?? operator do?', options: ['Logical AND', 'Null-coalescing: returns left if non-null, else right', 'String concatenation', 'Bitwise XOR'], correctAnswer: 1, explanation: 'The ?? operator returns the left operand if non-null, otherwise the right operand.' },
  ],
};
