import type { Module } from '../types';

export const module9: Module = {
  id: 'mod-9',
  title: 'Authentication & Authorization',
  description:
    'Implement JWT authentication, role-based authorization, and Identity framework in ASP.NET Core.',
  topics: [
    {
      id: 'mod9-t1',
      title: 'JWT Authentication',
      explanation: `## JSON Web Tokens (JWT)

JWT is a compact, URL-safe way to represent claims between two parties.

### JWT Structure

\`\`\`
Header.Payload.Signature

eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U
\`\`\`

### Generating JWT Tokens

\`\`\`csharp
public class TokenService
{
    private readonly IConfiguration _config;

    public TokenService(IConfiguration config) => _config = config;

    public string GenerateToken(User user)
    {
        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Name),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(1),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
\`\`\`

### Configuring JWT in Program.cs

\`\`\`csharp
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
    });

// In pipeline
app.UseAuthentication();
app.UseAuthorization();
\`\`\``,
      task: {
        description:
          'Create a `TokenService` class that generates JWT tokens with user claims (Id, Name, Email, Role). Include token expiration and signing with HMAC-SHA256.',
        starterCode: `using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

public class TokenService
{
    // TODO: Implement GenerateToken method
}`,
        solution: `using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

public class TokenService
{
    private readonly IConfiguration _config;

    public TokenService(IConfiguration config) => _config = config;

    public string GenerateToken(int userId, string name, string email, string role)
    {
        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, userId.ToString()),
            new Claim(ClaimTypes.Name, name),
            new Claim(ClaimTypes.Email, email),
            new Claim(ClaimTypes.Role, role)
        };

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(1),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}`,
        hints: [
          'Use SymmetricSecurityKey with a secret from configuration',
          'Add claims for user identity: Id, Name, Email, Role',
          'Set expiration with DateTime.UtcNow.AddHours()',
        ],
      },
    },
    {
      id: 'mod9-t2',
      title: 'Authorization Policies',
      explanation: `## Authorization in ASP.NET Core

### Role-Based Authorization

\`\`\`csharp
[Authorize(Roles = "Admin")]
[HttpDelete("{id}")]
public IActionResult Delete(int id) { /* ... */ }

[Authorize(Roles = "Admin,Manager")]
[HttpPut("{id}")]
public IActionResult Update(int id) { /* ... */ }
\`\`\`

### Policy-Based Authorization

\`\`\`csharp
// Program.cs
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("MinAge18", policy =>
        policy.RequireClaim("DateOfBirth")
              .RequireAssertion(ctx =>
              {
                  var dob = DateTime.Parse(ctx.User.FindFirst("DateOfBirth")!.Value);
                  return DateTime.Today.Year - dob.Year >= 18;
              }));

    options.AddPolicy("PremiumUser", policy =>
        policy.RequireRole("Premium")
              .RequireClaim("Subscription", "active"));
});

// Usage
[Authorize(Policy = "PremiumUser")]
[HttpGet("premium-content")]
public IActionResult GetPremium() { /* ... */ }
\`\`\`

### Custom Authorization Handler

\`\`\`csharp
public class MinimumAgeRequirement : IAuthorizationRequirement
{
    public int MinimumAge { get; }
    public MinimumAgeRequirement(int age) => MinimumAge = age;
}

public class MinimumAgeHandler : AuthorizationHandler<MinimumAgeRequirement>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        MinimumAgeRequirement requirement)
    {
        var dobClaim = context.User.FindFirst("DateOfBirth");
        if (dobClaim != null)
        {
            var dob = DateTime.Parse(dobClaim.Value);
            var age = DateTime.Today.Year - dob.Year;
            if (age >= requirement.MinimumAge)
                context.Succeed(requirement);
        }
        return Task.CompletedTask;
    }
}
\`\`\`

### Attribute-Level Access

\`\`\`csharp
[AllowAnonymous]    // No auth required
[Authorize]          // Any authenticated user
[Authorize(Roles = "Admin")]  // Specific role
[Authorize(Policy = "CustomPolicy")]  // Custom policy
\`\`\``,
      task: {
        description:
          'Set up authorization with two policies: "AdminOnly" requiring the Admin role, and "VerifiedUser" requiring a "EmailVerified" claim set to "true". Apply them to controller endpoints.',
        starterCode: `// Program.cs
// TODO: Configure authorization policies

// Controller
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    // TODO: Admin-only endpoint
    // TODO: Verified-user endpoint
    // TODO: Public endpoint
}`,
        solution: `// Program.cs
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy =>
        policy.RequireRole("Admin"));

    options.AddPolicy("VerifiedUser", policy =>
        policy.RequireClaim("EmailVerified", "true"));
});

// Controller
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    [Authorize(Policy = "AdminOnly")]
    [HttpGet("dashboard")]
    public IActionResult GetDashboard() => Ok(new { Message = "Admin dashboard" });

    [Authorize(Policy = "VerifiedUser")]
    [HttpGet("profile")]
    public IActionResult GetProfile() => Ok(new { Message = "Verified user profile" });

    [AllowAnonymous]
    [HttpGet("public")]
    public IActionResult GetPublic() => Ok(new { Message = "Public content" });
}`,
        hints: [
          'Use AddPolicy to define named authorization policies',
          'RequireRole checks the Role claim, RequireClaim checks any claim',
          '[AllowAnonymous] allows unauthenticated access to specific endpoints',
        ],
      },
    },
    {
      id: 'mod9-t3',
      title: 'ASP.NET Identity',
      explanation: `## ASP.NET Core Identity

Identity is a comprehensive membership system for user registration, login, and management.

### Setup

\`\`\`csharp
// Program.cs
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    options.Password.RequiredLength = 8;
    options.Password.RequireDigit = true;
    options.Password.RequireUppercase = true;
    options.User.RequireUniqueEmail = true;
})
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();
\`\`\`

### ApplicationUser

\`\`\`csharp
public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
\`\`\`

### Auth Controller

\`\`\`csharp
[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;

    public AuthController(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        var user = new ApplicationUser
        {
            UserName = request.Email,
            Email = request.Email,
            FirstName = request.FirstName,
            LastName = request.LastName
        };

        var result = await _userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded)
            return BadRequest(result.Errors);

        return Ok(new { Message = "User created successfully" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var result = await _signInManager.PasswordSignInAsync(
            request.Email, request.Password, false, false);

        if (!result.Succeeded)
            return Unauthorized();

        // Generate and return JWT token
        return Ok(new { Token = "..." });
    }
}
\`\`\``,
      task: {
        description:
          'Create a registration endpoint using UserManager that validates password requirements, creates the user, and assigns a default role. Return appropriate error messages for failures.',
        starterCode: `[HttpPost("register")]
public async Task<IActionResult> Register(RegisterRequest request)
{
    // TODO: Create user with UserManager
    // TODO: Assign default role
    // TODO: Handle errors
}

public record RegisterRequest(string Email, string FirstName, string LastName, string Password);`,
        solution: `[HttpPost("register")]
public async Task<IActionResult> Register(RegisterRequest request)
{
    var existingUser = await _userManager.FindByEmailAsync(request.Email);
    if (existingUser != null)
        return Conflict(new { Message = "Email already registered." });

    var user = new ApplicationUser
    {
        UserName = request.Email,
        Email = request.Email,
        FirstName = request.FirstName,
        LastName = request.LastName
    };

    var result = await _userManager.CreateAsync(user, request.Password);
    if (!result.Succeeded)
        return BadRequest(new { Errors = result.Errors.Select(e => e.Description) });

    await _userManager.AddToRoleAsync(user, "User");

    return Ok(new { Message = "Registration successful." });
}

public record RegisterRequest(string Email, string FirstName, string LastName, string Password);`,
        hints: [
          'Check for existing user with FindByEmailAsync before creating',
          'UserManager.CreateAsync returns IdentityResult with Errors',
          'AddToRoleAsync assigns a role after successful creation',
        ],
      },
    },
  ],
  test: [
    { id: 'mod9-q1', question: 'What are the three parts of a JWT token?', options: ['User, Password, Token', 'Header, Payload, Signature', 'Key, Value, Expiry', 'Issuer, Audience, Claims'], correctAnswer: 1, explanation: 'A JWT consists of a Header (algorithm), Payload (claims), and Signature (integrity verification).' },
    { id: 'mod9-q2', question: 'What does [Authorize] without parameters require?', options: ['Admin role', 'Any authenticated user', 'No authentication', 'A specific policy'], correctAnswer: 1, explanation: '[Authorize] without parameters requires any authenticated user, regardless of role.' },
    { id: 'mod9-q3', question: 'In which order must auth middleware be added?', options: ['UseAuthorization before UseAuthentication', 'UseAuthentication before UseAuthorization', 'Order does not matter', 'Only UseAuthorization is needed'], correctAnswer: 1, explanation: 'Authentication must run first (who are you?) before Authorization (are you allowed?).' },
    { id: 'mod9-q4', question: 'What does UserManager.CreateAsync return?', options: ['The created user object', 'An IdentityResult with Succeeded and Errors properties', 'A boolean', 'A JWT token'], correctAnswer: 1, explanation: 'CreateAsync returns IdentityResult which contains Succeeded (bool) and Errors (list of error descriptions).' },
    { id: 'mod9-q5', question: 'What is the purpose of Claims in JWT?', options: ['To encrypt the token', 'To store key-value pairs of user information', 'To compress the token size', 'To validate the token signature'], correctAnswer: 1, explanation: 'Claims are key-value pairs (e.g., Name, Email, Role) that carry user information in the token payload.' },
  ],
};
