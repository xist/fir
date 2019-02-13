# 🌲 fir

![](https://badgen.net/npm/v/@unsc/fir?color=grey)
![](https://badgen.net/david/dep/117/fir)
![](https://badgen.net/packagephobia/install/@unsc/fir?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> #### Tired of complicated logging? Me too.
>
> For small projects the current popular loggers are absurdley complex and verbose.  
> That's why I made fir. To be _small_ yet **powerful**.

### install

`npm install --save 117/fir`

### usage

Here is an easy to use example. 

```js
import fir, { Level } from "fir";

fir
  .save(Level.INFO, "./info.log") // save this level to a file
  .format(Level.INFO, (level, message) => `${level}: ${message}`) // define a format
  .log(Level.INFO, "Hey! Welcome to fir.");

```

### log

```js
fir.log(Level.INFO, "Hey! Welcome to fir.");
// INFO: Hey! Welcome to fir.
```

### format

If you wish to format log messages:

```js
fir.format(Level.INFO, (level, message) => `${level}: ${message}`);
```

The `callback` will be sent the log level and message.  
Return your formatted message, it will be applied at runtime.

### save

If you want to save log messages:

```js
fir.save(Level.INFO, "info.log");
```

All `Level.INFO` log messages will be saved to the `info.log` file.

### levels

There are four types of levels available.

```js
Level.INFO;
Level.DEBUG;
Level.WARN;
Level.ERROR;
```

Or if you wish to use all of them.

```js
Level.ALL;
```

### contribute

Pull requests are welcome.
