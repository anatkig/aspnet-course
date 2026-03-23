import type { Module } from '../types';

export const module2: Module = {
  id: 'mod-2',
  title: 'Methods & Arrays',
  description:
    'Master methods, parameter passing, arrays, and string manipulation in C#.',
  topics: [
    {
      id: 'mod2-t1',
      title: 'Methods & Parameters',
      explanation: `## Methods in C#

A method is a block of code that performs a task and can be called by name.

\`\`\`csharp
static int Add(int a, int b)
{
    return a + b;
}
\`\`\`

### Method Signature

\`\`\`csharp
[access] [static] returnType MethodName(parameters)
{
    // body
}
\`\`\`

### Parameter Passing

\`\`\`csharp
// By value (default) — a copy is passed
static void Increment(int x)
{
    x++; // does NOT affect the caller
}

// By reference — ref keyword
static void Increment(ref int x)
{
    x++; // DOES affect the caller
}

// Out parameter — must be assigned inside the method
static bool TryParse(string s, out int result)
{
    return int.TryParse(s, out result);
}
\`\`\`

### Optional & Named Parameters

\`\`\`csharp
static string Greet(string name, string greeting = "Hello")
{
    return $"{greeting}, {name}!";
}

// Usage
Greet("Alice");                    // "Hello, Alice!"
Greet("Bob", "Hi");               // "Hi, Bob!"
Greet(greeting: "Hey", name: "C"); // Named parameters
\`\`\`

### Expression-Bodied Members

\`\`\`csharp
static int Square(int x) => x * x;
static void Print(string msg) => Console.WriteLine(msg);
\`\`\``,
      tasks: [{
        description:
          'Create a method called `CalculateBMI` that takes weight (kg) and height (m) as doubles and returns the BMI. Create another method `ClassifyBMI` that takes a double BMI and returns a string classification.',
        starterCode: `using System;

class Program
{
    // TODO: Create CalculateBMI method

    // TODO: Create ClassifyBMI method

    static void Main()
    {
        double bmi = CalculateBMI(70, 1.75);
        Console.WriteLine($"BMI: {bmi:F1}");
        Console.WriteLine($"Classification: {ClassifyBMI(bmi)}");
    }
}`,
        solution: `using System;

class Program
{
    static double CalculateBMI(double weightKg, double heightM)
    {
        return weightKg / (heightM * heightM);
    }

    static string ClassifyBMI(double bmi)
    {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25) return "Normal";
        if (bmi < 30) return "Overweight";
        return "Obese";
    }

    static void Main()
    {
        double bmi = CalculateBMI(70, 1.75);
        Console.WriteLine($"BMI: {bmi:F1}");
        Console.WriteLine($"Classification: {ClassifyBMI(bmi)}");
    }
}`,
        hints: [
          'BMI formula: weight / (height * height)',
          'Use if/else or early returns for classification',
          ':F1 in string interpolation formats to 1 decimal place',
        ],
      }],
    },
    {
      id: 'mod2-t2',
      title: 'Arrays',
      explanation: `## Arrays in C#

Arrays are fixed-size collections of elements of the same type.

\`\`\`csharp
// Declaration and initialization
int[] numbers = new int[5];           // [0, 0, 0, 0, 0]
int[] primes = { 2, 3, 5, 7, 11 };   // shorthand
int[] squares = new int[] { 1, 4, 9 };

// Accessing elements
Console.WriteLine(primes[0]); // 2
primes[0] = 1;                // modify

// Length
Console.WriteLine(primes.Length); // 5
\`\`\`

### Multi-Dimensional Arrays

\`\`\`csharp
// 2D array
int[,] matrix = { { 1, 2 }, { 3, 4 }, { 5, 6 } };
Console.WriteLine(matrix[1, 0]); // 3

// Jagged array (array of arrays)
int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5 };
\`\`\`

### Common Array Operations

\`\`\`csharp
int[] nums = { 5, 3, 8, 1, 9 };

Array.Sort(nums);              // [1, 3, 5, 8, 9]
Array.Reverse(nums);           // [9, 8, 5, 3, 1]
int index = Array.IndexOf(nums, 5); // 2
bool exists = Array.Exists(nums, x => x > 7); // true
\`\`\`

### Iterating Arrays

\`\`\`csharp
string[] colors = { "Red", "Green", "Blue" };

// for loop
for (int i = 0; i < colors.Length; i++)
    Console.WriteLine($"{i}: {colors[i]}");

// foreach loop
foreach (string color in colors)
    Console.WriteLine(color);
\`\`\``,
      tasks: [{
        description:
          'Create an array of 10 random integers (1-100), print them, sort the array, print the sorted version, and display the min, max, and average.',
        starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];
        var rand = new Random();
        // TODO: Fill with random numbers 1-100
        // TODO: Print original array
        // TODO: Sort and print sorted array
        // TODO: Print min, max, and average
    }
}`,
        solution: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];
        var rand = new Random();

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = rand.Next(1, 101);

        Console.WriteLine("Original: " + string.Join(", ", numbers));

        Array.Sort(numbers);
        Console.WriteLine("Sorted:   " + string.Join(", ", numbers));

        Console.WriteLine($"Min: {numbers[0]}");
        Console.WriteLine($"Max: {numbers[^1]}");

        double avg = 0;
        foreach (int n in numbers) avg += n;
        avg /= numbers.Length;
        Console.WriteLine($"Average: {avg:F1}");
    }
}`,
        hints: [
          'Random.Next(1, 101) generates a number from 1 to 100',
          'string.Join(", ", array) joins array elements into a string',
          'numbers[^1] accesses the last element (index from end)',
        ],
      }],
    },
    {
      id: 'mod2-t3',
      title: 'Strings & StringBuilder',
      explanation: `## Strings in C#

Strings in C# are **immutable** — every modification creates a new string object.

\`\`\`csharp
string name = "Alice";
string upper = name.ToUpper();    // "ALICE"
string lower = name.ToLower();    // "alice"
int len = name.Length;            // 5
char first = name[0];            // 'A'
\`\`\`

### Common String Methods

\`\`\`csharp
string text = "  Hello, World!  ";

text.Trim()                    // "Hello, World!"
text.Contains("World")        // true
text.StartsWith("  He")       // true
text.Replace("World", "C#")   // "  Hello, C#!  "
text.Substring(8, 5)          // "World"
text.Split(',')               // ["  Hello", " World!  "]
text.IndexOf("World")         // 9
\`\`\`

### String Interpolation & Formatting

\`\`\`csharp
string name = "Bob";
int age = 30;

// String interpolation
string msg = $"Name: {name}, Age: {age}";

// Verbatim strings (no escape processing)
string path = @"C:\\Users\\file.txt";

// Raw string literals (C# 11)
string json = \\"\\"\\"
{
  "name": "test"
}
\\"\\"\\"
\`\`\`

### StringBuilder for Performance

\`\`\`csharp
using System.Text;

var sb = new StringBuilder();
for (int i = 0; i < 1000; i++)
    sb.Append($"Line {i}\\n");

string result = sb.ToString();
\`\`\`

> **Rule of thumb**: Use \`StringBuilder\` when concatenating strings in a loop.`,
      tasks: [{
        description:
          'Write a method that takes a sentence and returns a new string with each word capitalized (title case). Use string.Split and string.Join.',
        starterCode: `using System;

class Program
{
    static string ToTitleCase(string sentence)
    {
        // TODO: Split sentence into words
        // TODO: Capitalize first letter of each word
        // TODO: Join words back together
        return "";
    }

    static void Main()
    {
        Console.WriteLine(ToTitleCase("hello world from csharp"));
        // Expected: "Hello World From Csharp"
    }
}`,
        solution: `using System;

class Program
{
    static string ToTitleCase(string sentence)
    {
        string[] words = sentence.Split(' ');
        for (int i = 0; i < words.Length; i++)
        {
            if (words[i].Length > 0)
                words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
        }
        return string.Join(" ", words);
    }

    static void Main()
    {
        Console.WriteLine(ToTitleCase("hello world from csharp"));
    }
}`,
        hints: [
          'Split the string using Split(\' \')',
          'Use char.ToUpper() on the first character',
          'Substring(1) gets everything after the first character',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod2-q1', question: 'What does the ref keyword do when passing a parameter?', options: ['Creates a copy of the value', 'Passes the variable by reference so changes affect the caller', 'Makes the parameter optional', 'Converts the parameter to a reference type'], correctAnswer: 1, explanation: 'The ref keyword passes a variable by reference, so modifications inside the method affect the caller.' },
    { id: 'mod2-q2', question: 'What is the default value of elements in a new int[] array?', options: ['null', 'undefined', '0', '-1'], correctAnswer: 2, explanation: 'Value types like int default to 0. Reference types default to null.' },
    { id: 'mod2-q3', question: 'Why should you use StringBuilder instead of string concatenation in a loop?', options: ['StringBuilder supports Unicode, string does not', 'Strings are immutable, so each concatenation allocates a new string', 'StringBuilder is thread-safe', 'String concatenation is not allowed in loops'], correctAnswer: 1, explanation: 'Strings are immutable. Concatenation in a loop creates many temporary string objects, while StringBuilder modifies an internal buffer.' },
    { id: 'mod2-q4', question: 'What does numbers[^1] access?', options: ['The first element', 'The last element', 'The element at index -1 (error)', 'The length of the array'], correctAnswer: 1, explanation: '^1 is the index-from-end operator. ^1 means the last element.' },
    { id: 'mod2-q5', question: 'What is the difference between a multi-dimensional array and a jagged array?', options: ['No difference, they are the same', 'Multi-dimensional is int[,], jagged is int[][] with independent row lengths', 'Jagged arrays can only hold strings', 'Multi-dimensional arrays are reference types, jagged are value types'], correctAnswer: 1, explanation: 'int[,] is rectangular. int[][] is an array of arrays where each inner array can have a different length.' },
  ],
};
