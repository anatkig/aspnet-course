import type { Module } from '../types';

export const module8: Module = {
  id: 'mod-8',
  title: 'Entity Framework Core',
  description:
    'Master the ORM: DbContext, migrations, querying, relationships, and performance.',
  topics: [
    {
      id: 'mod8-t1',
      title: 'DbContext & Models',
      explanation: `## Entity Framework Core

EF Core is an **ORM** (Object-Relational Mapper) that lets you work with databases using C# objects.

### Setting Up DbContext

\`\`\`csharp
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Product> Products => Set<Product>();
    public DbSet<Category> Categories => Set<Category>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(p => p.Id);
            entity.Property(p => p.Name).HasMaxLength(100).IsRequired();
            entity.Property(p => p.Price).HasPrecision(18, 2);
        });
    }
}
\`\`\`

### Entity Models

\`\`\`csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Product> Products { get; set; } = new();
}
\`\`\`

### Registration in Program.cs

\`\`\`csharp
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
\`\`\`

### Migrations

\`\`\`bash
dotnet ef migrations add InitialCreate
dotnet ef database update
\`\`\``,
      tasks: [{
        description:
          'Define a DbContext with two entities: `Blog` (Id, Title, Url) and `Post` (Id, Title, Content, BlogId). Configure the one-to-many relationship in OnModelCreating.',
        starterCode: `using Microsoft.EntityFrameworkCore;

// TODO: Create Blog entity
// TODO: Create Post entity
// TODO: Create BlogDbContext with DbSets and relationship config`,
        solution: `using Microsoft.EntityFrameworkCore;

public class Blog
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Url { get; set; } = "";
    public List<Post> Posts { get; set; } = new();
}

public class Post
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Content { get; set; } = "";
    public int BlogId { get; set; }
    public Blog Blog { get; set; } = null!;
}

public class BlogDbContext : DbContext
{
    public BlogDbContext(DbContextOptions<BlogDbContext> options)
        : base(options) { }

    public DbSet<Blog> Blogs => Set<Blog>();
    public DbSet<Post> Posts => Set<Post>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Blog>()
            .HasMany(b => b.Posts)
            .WithOne(p => p.Blog)
            .HasForeignKey(p => p.BlogId);
    }
}`,
        hints: [
          'Use navigation properties: Blog has List<Post>, Post has Blog',
          'Configure relationships using HasMany/WithOne/HasForeignKey',
          'DbSet<T> represents a table in the database',
        ],
      }],
    },
    {
      id: 'mod8-t2',
      title: 'Querying & CRUD',
      explanation: `## Querying with EF Core

### Basic CRUD Operations

\`\`\`csharp
public class ProductService
{
    private readonly AppDbContext _db;

    public ProductService(AppDbContext db) => _db = db;

    // Read
    public async Task<List<Product>> GetAllAsync()
        => await _db.Products.ToListAsync();

    public async Task<Product?> GetByIdAsync(int id)
        => await _db.Products.FindAsync(id);

    // Create
    public async Task<Product> CreateAsync(Product product)
    {
        _db.Products.Add(product);
        await _db.SaveChangesAsync();
        return product;
    }

    // Update
    public async Task UpdateAsync(Product product)
    {
        _db.Products.Update(product);
        await _db.SaveChangesAsync();
    }

    // Delete
    public async Task DeleteAsync(int id)
    {
        var product = await _db.Products.FindAsync(id);
        if (product != null)
        {
            _db.Products.Remove(product);
            await _db.SaveChangesAsync();
        }
    }
}
\`\`\`

### LINQ Queries with EF Core

\`\`\`csharp
// Filtering
var expensive = await _db.Products
    .Where(p => p.Price > 100)
    .ToListAsync();

// Including related data (eager loading)
var blogsWithPosts = await _db.Blogs
    .Include(b => b.Posts)
    .ToListAsync();

// Projection
var names = await _db.Products
    .Select(p => new { p.Name, p.Price })
    .ToListAsync();

// Pagination
var page = await _db.Products
    .OrderBy(p => p.Name)
    .Skip(20)
    .Take(10)
    .ToListAsync();
\`\`\`

### Tracking vs No-Tracking

\`\`\`csharp
// Tracked (default) — EF monitors changes
var product = await _db.Products.FindAsync(1);

// No tracking — better for read-only queries
var products = await _db.Products
    .AsNoTracking()
    .ToListAsync();
\`\`\``,
      tasks: [{
        description:
          'Create a `ProductRepository` class that uses EF Core for: GetAll with optional filtering by name, GetById, Create, Update, Delete. Use async methods and include pagination support.',
        starterCode: `public class ProductRepository
{
    private readonly AppDbContext _db;

    public ProductRepository(AppDbContext db) => _db = db;

    // TODO: GetAllAsync with filtering and pagination
    // TODO: GetByIdAsync
    // TODO: CreateAsync
    // TODO: UpdateAsync
    // TODO: DeleteAsync
}`,
        solution: `public class ProductRepository
{
    private readonly AppDbContext _db;

    public ProductRepository(AppDbContext db) => _db = db;

    public async Task<(List<Product> Items, int Total)> GetAllAsync(
        string? nameFilter = null, int page = 1, int pageSize = 10)
    {
        var query = _db.Products.AsQueryable();

        if (!string.IsNullOrEmpty(nameFilter))
            query = query.Where(p => p.Name.Contains(nameFilter));

        int total = await query.CountAsync();
        var items = await query
            .OrderBy(p => p.Name)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .AsNoTracking()
            .ToListAsync();

        return (items, total);
    }

    public async Task<Product?> GetByIdAsync(int id)
        => await _db.Products.FindAsync(id);

    public async Task<Product> CreateAsync(Product product)
    {
        _db.Products.Add(product);
        await _db.SaveChangesAsync();
        return product;
    }

    public async Task UpdateAsync(Product product)
    {
        _db.Products.Update(product);
        await _db.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var product = await _db.Products.FindAsync(id);
        if (product is null) return false;
        _db.Products.Remove(product);
        await _db.SaveChangesAsync();
        return true;
    }
}`,
        hints: [
          'Use Skip and Take for pagination: .Skip((page-1)*pageSize).Take(pageSize)',
          'Use AsNoTracking() for read-only queries to improve performance',
          'Return a tuple (Items, Total) for paginated results',
        ],
      }],
    },
    {
      id: 'mod8-t3',
      title: 'Migrations & Relationships',
      explanation: `## EF Core Migrations

Migrations keep your database schema in sync with your model.

\`\`\`bash
# Create a migration
dotnet ef migrations add AddCategoryTable

# Apply migrations to database
dotnet ef database update

# Remove last migration (if not applied)
dotnet ef migrations remove

# Generate SQL script
dotnet ef migrations script
\`\`\`

### Relationships

#### One-to-Many

\`\`\`csharp
public class Author
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Book> Books { get; set; } = new();
}

public class Book
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public int AuthorId { get; set; }        // FK
    public Author Author { get; set; } = null!;
}
\`\`\`

#### Many-to-Many

\`\`\`csharp
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Course> Courses { get; set; } = new();
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public List<Student> Students { get; set; } = new();
}

// EF Core 5+ auto-creates the join table
\`\`\`

#### One-to-One

\`\`\`csharp
public class User
{
    public int Id { get; set; }
    public UserProfile Profile { get; set; } = null!;
}

public class UserProfile
{
    public int Id { get; set; }
    public string Bio { get; set; } = "";
    public int UserId { get; set; }
    public User User { get; set; } = null!;
}
\`\`\`

### Seeding Data

\`\`\`csharp
protected override void OnModelCreating(ModelBuilder mb)
{
    mb.Entity<Category>().HasData(
        new Category { Id = 1, Name = "Electronics" },
        new Category { Id = 2, Name = "Furniture" }
    );
}
\`\`\``,
      tasks: [{
        description:
          'Design entities for an e-commerce: Customer (Id, Name, Email), Order (Id, OrderDate, CustomerId), and OrderItem (Id, ProductName, Quantity, UnitPrice, OrderId). Configure all relationships and add seed data.',
        starterCode: `using Microsoft.EntityFrameworkCore;

// TODO: Create Customer, Order, OrderItem entities
// TODO: Create ECommerceDbContext
// TODO: Configure relationships and seed data`,
        solution: `using Microsoft.EntityFrameworkCore;

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public List<Order> Orders { get; set; } = new();
}

public class Order
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; } = null!;
    public List<OrderItem> Items { get; set; } = new();
}

public class OrderItem
{
    public int Id { get; set; }
    public string ProductName { get; set; } = "";
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }
    public int OrderId { get; set; }
    public Order Order { get; set; } = null!;
}

public class ECommerceDbContext : DbContext
{
    public ECommerceDbContext(DbContextOptions<ECommerceDbContext> options)
        : base(options) { }

    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.Entity<Customer>().HasMany(c => c.Orders).WithOne(o => o.Customer).HasForeignKey(o => o.CustomerId);
        mb.Entity<Order>().HasMany(o => o.Items).WithOne(i => i.Order).HasForeignKey(i => i.OrderId);
        mb.Entity<OrderItem>().Property(i => i.UnitPrice).HasPrecision(18, 2);

        mb.Entity<Customer>().HasData(
            new Customer { Id = 1, Name = "Alice", Email = "alice@example.com" }
        );
    }
}`,
        hints: [
          'Use navigation properties on both sides of each relationship',
          'Configure Foreign Keys with HasForeignKey',
          'Use HasPrecision for decimal columns to avoid precision warnings',
        ],
      }],
    },
  ],
  test: [
    { id: 'mod8-q1', question: 'What does DbContext represent in EF Core?', options: ['A database table', 'A session with the database for querying and saving data', 'A SQL query builder', 'A migration script'], correctAnswer: 1, explanation: 'DbContext is a session with the database. It tracks changes and provides methods to query and save entities.' },
    { id: 'mod8-q2', question: 'What does AsNoTracking() do?', options: ['Prevents the query from executing', 'Disables change tracking for better read performance', 'Makes the query run synchronously', 'Removes all data from the table'], correctAnswer: 1, explanation: 'AsNoTracking tells EF Core not to track the returned entities, improving performance for read-only queries.' },
    { id: 'mod8-q3', question: 'What is the purpose of EF Core migrations?', options: ['To migrate data between databases', 'To keep the database schema in sync with the C# model', 'To optimize query performance', 'To back up the database'], correctAnswer: 1, explanation: 'Migrations generate incremental schema changes based on your model modifications.' },
    { id: 'mod8-q4', question: 'How does EF Core handle many-to-many relationships (EF Core 5+)?', options: ['It requires a manual join entity always', 'It auto-creates a join table from navigation properties on both sides', 'It does not support many-to-many', 'It uses a single table with duplicate rows'], correctAnswer: 1, explanation: 'EF Core 5+ can auto-create the join table when both entities have collection navigation properties.' },
    { id: 'mod8-q5', question: 'What method applies pending migrations to the database?', options: ['dotnet ef migrations add', 'dotnet ef database update', 'dotnet ef migrations remove', 'dotnet ef database drop'], correctAnswer: 1, explanation: 'dotnet ef database update applies all pending migrations to bring the database schema up to date.' },
  ],
};
