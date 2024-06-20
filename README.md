# README.md

# TERMINAL_COLORS - TERCO\_

**TerCo\_** es una página para crear temas sencillos para la terminal [Alacritty](https://alacritty.org/). Surge como una alternativa a la app de consola [alacritty-themes](https://github.com/alacritty/alacritty-theme), para crear temas más personalizados sin necesidad de instalar nada.

## Uso

### Paletta

Para usarlo, puedes crear una paleta de colores con sus códigos hexadecimales. Puedes utilizar alguna de estas páginas para crear tu paleta:

- [Coolors](https://coolors.co/)
- [ColorHunt](https://colorhunt.co/)
- [ColorMind](http://colormind.io/)

### Página

Luego puedes ir a la página de **TerCo\_** y colocar la paleta de colores en los respectivos campos. No importa el orden en el que los ingreses, pero puedes ver su generación en el lado derecho del formulario.
Los campos Texto y Fondo cumple sus respectivas funciones.

**Texto:** Texto plano.

**Fondo:** El background de la terminal.

### Aplicar el tema

Crear una carpeta para contener los temas creados y no mezclarlos con los propios.

```Plain Text
mkdir ~/alacritty-themes
```

Crea el archivo del tema con extencion _.toml_ en la carpeta creada.

```Plain Text
cd ~/alacritty-themes && touch simple.toml
```

Agrega las líneas de código generadas por la página de Terco\_ en el archivo que acabas de crear. (Tema default)

```Plain Text
[colors]
cursor = { text = "#222F40", cursor = "#82A8D9"}
selection = { text = "#222F40", cursor = "#6F87A6"}
[colors.primary]
foreground = "#BBCDF2"
background = "#222F40"
[colors.search]
matches = { foreground = "#222F40", background = "#82A8D9"}
focused_match = { foreground = "#222F40", background = "#6F87A6"}
[colors.normal]
black = "#334051"
red = "#3F5573"
green = "#6F87A6"
yellow = "#B2B1E6"
blue = "#82A8D9"
magenta = "#93b9ea"
cyan = "#6F87A6"
white = "#aabce1"
[colors.bright]
black = "#445162"
red = "#506684"
green = "#8098b7"
yellow = "#c3c2f7"
blue = "#93b9ea"
magenta = "#a4cafb"
cyan = "#8098b7"
white = "#ddf014"
```

Agrega la siguiente línea en la parte superior de tu archivo de configuración para alacritty.

```Plain Text
import = [
  "~/alacritty-themes/simple.toml"
]
```

### Recomendaciones

Si el tema no se aplica, pueder cargar el archivo con el comando `source`\*\* \*\*o reiniciar la terminal de alacritty para refrescar la configuración.
