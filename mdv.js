import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class HyperSpaceMath {

    // Simple 3D Vector class for the result
    public static class Vector3 {
        public double x, y, z;
        public Vector3(double x, double y, double z) {
            this.x = x; this.y = y; this.z = z;
        }
        @Override
        public String toString() { return String.format("(%.2f, %.2f, %.2f)", x, y, z); }
    }

    // A pair of indices representing an edge
    public static class Edge {
        public int start, end;
        public Edge(int start, int end) {
            this.start = start; this.end = end;
        }
    }

    /**
     * Generate vertices for N-dimensions.
     * Returns a List of double arrays.
     */
    public static List<double[]> generateHypercubeVertices(int dimensions) {
        int numVertices = (int) Math.pow(2, dimensions);
        List<double[]> vertices = new ArrayList<>();

        for (int i = 0; i < numVertices; i++) {
            double[] point = new double[dimensions];
            for (int j = 0; j < dimensions; j++) {
                // If bit j is set, value is 1, else -1
                point[j] = ((i >> j) & 1) == 1 ? 1.0 : -1.0;
            }
            vertices.add(point);
        }
        return vertices;
    }

    /**
     * Generate edges for N-dimensions.
     */
    public static List<Edge> generateHypercubeEdges(int dimensions) {
        int numVertices = (int) Math.pow(2, dimensions);
        List<Edge> edges = new ArrayList<>();

        for (int i = 0; i < numVertices; i++) {
            for (int j = 0; j < dimensions; j++) {
                int neighbor = i ^ (1 << j);
                if (i < neighbor) {
                    edges.add(new Edge(i, neighbor));
                }
            }
        }
        return edges;
    }

    /**
     * Rotate point in N-space along axis1-axis2 plane.
     */
    public static void rotate(double[] point, double theta, int axis1, int axis2) {
        if (axis1 >= point.length || axis2 >= point.length) return;

        double cos = Math.cos(theta);
        double sin = Math.sin(theta);

        double val1 = point[axis1];
        double val2 = point[axis2];

        point[axis1] = val1 * cos - val2 * sin;
        point[axis2] = val1 * sin + val2 * cos;
    }

    /**
     * Recursively project N-dimensional point down to 3D.
     */
    public static Vector3 project(double[] rawPoint, double perspectiveDist) {
        // Copy to avoid mutating the original simulation state
        double[] current = Arrays.copyOf(rawPoint, rawPoint.length);
        
        // Loop until we reach 3 dimensions
        while (current.length > 3) {
            int lastIdx = current.length - 1;
            double w = current[lastIdx];
            
            double scale = 1.0 / (perspectiveDist - w);
            
            // Create array for N-1 dimension
            double[] projected = new double[lastIdx];
            for(int i = 0; i < lastIdx; i++) {
                projected[i] = current[i] * scale;
            }
            current = projected;
        }

        // Return the final 3D vector
        return new Vector3(current[0], current[1], current[2]);
    }

    // Main method for testing
    public static void main(String[] args) {
        int dim = 4; // 4D Tesseract
        List<double[]> vertices = generateHypercubeVertices(dim);
        
        System.out.println("Generated " + vertices.size() + " vertices for " + dim + "D cube.");
        
        // Simulate one frame
        double[] point = vertices.get(0); // Take the first vertex
        System.out.println("Original 4D Point: " + Arrays.toString(point));
        
        // Rotate in X-W plane (indices 0 and 3)
        rotate(point, Math.PI / 4, 0, 3); 
        System.out.println("Rotated 4D Point: " + Arrays.toString(point));
        
        // Project to 3D
        Vector3 v3 = project(point, 2.5);
        System.out.println("Projected 3D Point: " + v3);
    }
}
