
import numpy as np
import matplotlib.pyplot as plt

# Set random seed for reproducibility
np.random.seed(42)

# Parameters
sigma = 1.0
mu0 = np.array([-3, 0])
mu1 = np.array([3, 1])

# Vector Field definition
def vector_field(x, t):
    # Avoid division by zero at t=0.5 if trajectory hits singularity (unlikely for these params)
    sigma2_t = (1 - 2*t + 2*t**2) * (sigma**2)
    
    mu_t = (1-t)*mu0 + t*mu1
    
    factor = (2*t - 1) / (1 - 2*t + 2*t**2)
    
    v = (mu1 - mu0) + factor * (x - mu_t)
    return v

# Simple Euler integration
def solve_ode(x0, steps=100):
    dt = 1.0 / steps
    trajectory = [x0]
    t = 0.001
    x_curr = x0
    
    for _ in range(steps):
        if t >= 0.999: break
        v = vector_field(x_curr, t)
        x_curr = x_curr + v * dt
        trajectory.append(x_curr)
        t += dt
        
    return np.array(trajectory)

# Plotting
plt.figure(figsize=(10, 6), dpi=150)

initial_points = []
# Create a grid of starting points around mu0
for i in range(15):
    initial_points.append(mu0 + np.random.normal(0, sigma, 2))

# Add some specific structural points to see curvature clearly
initial_points.append(mu0 + np.array([0, 2]))
initial_points.append(mu0 + np.array([0, -2]))
initial_points.append(mu0 + np.array([2, 0])) # Between means

# Solve ODE for each point
for x0 in initial_points:
    sol = solve_ode(x0, steps=300)
    plt.plot(sol[:, 0], sol[:, 1], 'b-', alpha=0.4, linewidth=1.5)

# Plot means
plt.plot(mu0[0], mu0[1], 'ro', markersize=10, label='$\mu_0$ (Start)')
plt.plot(mu1[0], mu1[1], 'go', markersize=10, label='$\mu_1$ (End)')

# Draw the straight line connecting means for reference
plt.plot([mu0[0], mu1[0]], [mu0[1], mu1[1]], 'k--', alpha=0.3, label='Line of Means')

# Styling
plt.title('1-Rectified Flow Trajectories (Two Gaussians)', fontsize=14)
plt.xlabel('$x_1$')
plt.ylabel('$x_2$')
plt.grid(True, alpha=0.2)
plt.legend()
plt.tight_layout()

# Save
output_path = '/Users/saurabh/Personal/Website/saurabhme.github.io/public/images/blog/rectified-flow/gaussian-trajectories.png'
plt.savefig(output_path)
print(f"Plot saved successfully to {output_path}")
