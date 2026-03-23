import type { Module } from '../types';

export const module3: Module = {
  id: 'mod-3',
  title: 'Object-Oriented Programming',
  description:
    'Master classes, objects, inheritance, polymorphism, and encapsulation in C#.',
  topics: [
    {
      id: 'mod3-t1',
      title: 'Classes & Objects',
      explanation: `## Classes and Objects

A **class** is a blueprint. An **object** is an instance of that class.

\`\`\`csharp
public class Person
{
    // Fields
    private string _name;
    private int _age;

    // Constructor
    public Person(string name, int age)
    {
        _name = name;
        _age = age;
    }

    // Properties
    public string Name
    {
        get => _name;
        set => _name = value;
    }

    // Auto-property
    public string Email { get; set; } = "";

    // Method
    public string Introduce()
    {
        return $"Hi, I'm {_name}, {_age} years old.";
    }
}
\`\`\`

### Creating Objects

\`\`\`csharp
var alice = new Person("Alice", 30);
Console.WriteLine(alice.Introduce());

// Object initializer
var bob = new Person("Bob", 25) { Email = "bob@example.com" };
\`\`\`

### Access Modifiers

| Modifier | Access |
|----------|--------|
| public | Everywhere |
| private | Same class only |
| protected | Same class + derived classes |
| internal | Same assembly |
| protected internal | Same assembly or derived classes |`,
      tasks: [{
        description:
          'Create a `BankAccount` class with properties for AccountHolder (string), Balance (decimal, read-only from outside), and methods Deposit and Withdraw that validate amounts.',
        starterCode: `public class BankAccount
{
    // TODO: Properties for AccountHolder and Balance
    // TODO: Constructor
    // TODO: Deposit method
    // TODO: Withdraw method (check sufficient funds)
}`,
        solution: `public class BankAccount
{
    public string AccountHolder { get; set; }
    public decimal Balance { get; private set; }

    public BankAccount(string holder, decimal initialBalance)
    {
        AccountHolder = holder;
        Balance = initialBalance;
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Amount must be positive.");
        Balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Amount must be positive.");
        if (amount > Balance)
            return false;
        Balance -= amount;
        return true;
    }
}`,
        hints: [
          'Use { get; private set; } to make Balance readable but only settable internally',
          'Validate that deposit/withdraw amounts are positive',
          'Return bool from Withdraw to indicate success/failure',
        ],
      }],
    },
    {
      id: 'mod3-t2',
      title: 'Inheritance & Polymorphism',
      explanation: `## Inheritance

A class can inherit from another class using \`:\`.

\`\`\`csharp
public class Animal
{
    public string Name { get; set; }

    public virtual string Speak()
    {
        return "...";
    }
}

public class Dog : Animal
{
    public override string Speak()
    {
        return "Woof!";
    }
}

public class Cat : Animal
{
    public override string Speak()
    {
        return "Meow!";
    }
}
\`\`\`

### Key Concepts

- **virtual** — marks a method as overridable
- **override** — provides a new implementation in a derived class
- **base** — calls the parent class constructor or method
- **sealed** — prevents further inheritance

\`\`\`csharp
public class Puppy : Dog
{
    public override string Speak()
    {
        return base.Speak() + " (tiny)";
    }
}
\`\`\`

### Polymorphism

\`\`\`csharp
Animal[] animals = { new Dog(), new Cat(), new Dog() };
foreach (Animal a in animals)
    Console.WriteLine(a.Speak()); // Calls the correct override
\`\`\`

### Abstract Classes

\`\`\`csharp
public abstract class Shape
{
    public abstract double Area();

    public void PrintArea()
    {
        Console.WriteLine($"Area: {Area()}");
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }
    public override double Area() => Math.PI * Radius * Radius;
}
\`\`\``,
      tasks: [{
        description:
          'Create an abstract class `Shape` with an abstract method `Area()` and `Perimeter()`. Implement `Rectangle` and `Circle` subclasses. Create an array of shapes and print each area and perimeter.',
        starterCode: `using System;

public abstract class Shape
{
    // TODO: abstract Area() and Perimeter()
}

// TODO: Rectangle class

// TODO: Circle class

class Program
{
    static void Main()
    {
        // TODO: Create array of shapes and print areas/perimeters
    }
}`,
        solution: `using System;

public abstract class Shape
{
    public abstract double Area();
    public abstract double Perimeter();
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }

    public Rectangle(double w, double h) { Width = w; Height = h; }

    public override double Area() => Width * Height;
    public override double Perimeter() => 2 * (Width + Height);
}

public class Circle : Shape
{
    public double Radius { get; set; }

    public Circle(double r) { Radius = r; }

    public override double Area() => Math.PI * Radius * Radius;
    public override double Perimeter() => 2 * Math.PI * Radius;
}

class Program
{
    static void Main()
    {
        Shape[] shapes = { new Rectangle(5, 3), new Circle(4), new Rectangle(10, 2) };
        foreach (var shape in shapes)
        {
            Console.WriteLine($"{shape.GetType().Name}: Area={shape.Area():F2}, Perimeter={shape.Perimeter():F2}");
        }
    }
}`,
        hints: [
          'Use the abstract keyword for methods without a body',
          'Each subclass must override all abstract methods',
          'shape.GetType().Name gives the runtime type name',
        ],
      }],
    },
    {
      id: 'mod3-t3',
      title: 'Interfaces',
      explanation: `## Interfaces

An interface defines a **contract** — what a class must implement, without specifying how.

\`\`\`csharp
public interface ILogger
{
    void Log(string message);
    void LogError(string message);
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
        => Console.WriteLine($"[INFO] {message}");

    public void LogError(string message)
        => Console.WriteLine($"[ERROR] {message}");
}
\`\`\`

### Multiple Interface Implementation

\`\`\`csharp
public interface ISerializable
{
    string Serialize();
}

public interface IValidatable
{
    bool IsValid();
}

public class User : ISerializable, IValidatable
{
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";

    public string Serialize() => $"{Name}|{Email}";
    public bool IsValid() => !string.IsNullOrEmpty(Name) && Email.Contains("@");
}
\`\`\`

### Default Interface Methods (C# 8+)

\`\`\`csharp
public interface ILogger
{
    void Log(string message);

    void LogWarning(string message)
        => Log($"WARNING: {message}");  // default implementation
}
\`\`\`

### Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|---------|-----------|---------------|
| Multiple inheritance | Yes | No |
| Fields | No | Yes |
| Constructors | No | Yes |
| Default methods | C# 8+ | Yes |
| Access modifiers | Public only (default) | Any |`,
      tasks: [{
        description:
          'Define an `IRepository<T>` interface with methods: GetById, GetAll, Add, Update, Delete. Implement an in-memory `InMemoryRepository<T>` using a List<T>.',
        starterCode: `using System;
using System.Collections.Generic;

public interface IRepository<T>
{
    // TODO: Define CRUD methods
}

// TODO: Implement InMemoryRepository<T>`,
        solution: `using System;
using System.Collections.Generic;
using System.Linq;

public interface IEntity
{
    int Id { get; set; }
}

public interface IRepository<T> where T : IEntity
{
    T? GetById(int id);
    List<T> GetAll();
    void Add(T entity);
    void Update(T entity);
    void Delete(int id);
}

public class InMemoryRepository<T> : IRepository<T> where T : IEntity
{
    private readonly List<T> _items = new();

    public T? GetById(int id) => _items.FirstOrDefault(x => x.Id == id);
    public List<T> GetAll() => new(_items);
    public void Add(T entity) => _items.Add(entity);

    public void Update(T entity)
    {
        var index = _items.FindIndex(x => x.Id == entity.Id);
        if (index >= 0) _items[index] = entity;
    }

    public void Delete(int id) => _items.RemoveAll(x => x.Id == id);
}`,
        hints: [
          'Use generics <T> to make the repository type-safe',
          'Consider adding a constraint like where T : IEntity',
          'List<T>.FirstOrDefault can find items by predicate',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod3-q1', question: 'What keyword marks a method as overridable in a base class?', options: ['abstract', 'virtual', 'override', 'new'], correctAnswer: 1, explanation: 'The virtual keyword allows a method to be overridden in derived classes.' },
    { id: 'mod3-q2', question: 'Can a class inherit from multiple classes in C#?', options: ['Yes, C# supports multiple class inheritance', 'No, but a class can implement multiple interfaces', 'Yes, but only if they are abstract classes', 'No, C# does not support any form of inheritance'], correctAnswer: 1, explanation: 'C# supports single class inheritance but allows implementing multiple interfaces.' },
    { id: 'mod3-q3', question: 'What is the purpose of the abstract keyword on a class?', options: ['It makes the class static', 'It prevents the class from being instantiated directly', 'It makes all methods virtual automatically', 'It seals the class from inheritance'], correctAnswer: 1, explanation: 'Abstract classes cannot be instantiated. They serve as base classes that define a contract for derived classes.' },
    { id: 'mod3-q4', question: 'What access modifier makes a property readable everywhere but only settable within the class?', options: ['public get; private set;', 'protected get; public set;', 'internal get; internal set;', 'private get; public set;'], correctAnswer: 0, explanation: 'public get; private set; makes the property publicly readable but only modifiable within the declaring class.' },
    { id: 'mod3-q5', question: 'What is polymorphism?', options: ['Writing the same method name in different classes', 'The ability to treat objects of different types through a common base type', 'A design pattern for creating objects', 'Hiding base class methods in derived classes'], correctAnswer: 1, explanation: 'Polymorphism lets you use a base class reference to call overridden methods on derived class objects.' },
  ],
};
