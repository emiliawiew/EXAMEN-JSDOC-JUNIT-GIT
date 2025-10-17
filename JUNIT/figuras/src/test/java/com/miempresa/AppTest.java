import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class FiguraTest {

    @Test
    public void testCalcularArea() {
        Figura f = new Figura("Triangulo");
        double resultado = f.calcularArea(4, 6);
        assertEquals(12.0, resultado, 0.0001);
    }

    @Test
    public void testCambiarNombreNull() {
        Figura f = new Figura("Triangulo");
        String resultado = f.cambiarNombre(null);
        assertNull(resultado);
    }

    @Test
    public void testCambiarNombreVacio() {
        Figura f = new Figura("Triangulo");
        String resultado = f.cambiarNombre("");
        assertNull(resultado);
    }

    @Test
    public void testEsCuadradoTrue() {
        Figura f = new Figura("Cuadrado");
        assertTrue(f.esCuadrado(5, 5));
    }

    @Test
    public void testEsCuadradoFalse() {
        Figura f = new Figura("Rectangulo");
        assertFalse(f.esCuadrado(5, 7));
    }
}

