# 🌲 fir

![](https://badgen.net/badgesize/gzip/https://github.com/117/fir/archive/master.zip?label=code%20size&color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> #### Tired of complicated logging? Me too.
>
> For small projects the current popular loggers are absurdley complex and verbose.  
> That's why I made Fir. To be _small_ yet **powerful**.

### install

`npm install --save 117/fir`

### example

A simple formatting and saving example.

```js
import fir from "fir";
import { Level } from "fir";

fir.save(Level.INFO, "./error.log");
fir.format(Level.INFO, (level, message) => `${level}: ${message}`);
fir.log(Level.INFO, "Hey! Welcome to fir.");
```

### levels

There are four types of levels available.

```js
level.INFO;
level.DEBUG;
level.WARN;
level.ERROR;
```

Or if you wish to use a wild-card.

```js
level.ALL;
```

### methods

| Class | Method                      | Description                      |
| :---: | :-------------------------- | :------------------------------- |
| `fir` | `save(level, file, async?)` | Define the log file for a level. |
| `fir` | `format(level, formatter)`  | Define the format for a level.   |
| `fir` | `log(level, input)`         | Log the provided input.          |

### contribute

Pull requests are welcome. So are collaborators! 🥳
