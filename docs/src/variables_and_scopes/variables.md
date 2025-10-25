# Variables

Vega variables are immutable and non-nullable by default, meaning their value cannot be changed or set to `nil` without explicit declaration.

## Declaration
Declared using `:=` (inferred form) or `T :=` (typed form). 

The type is assigned as `T` if it is given; otherwise, [type inference](https://en.wikipedia.org/wiki/Type_inference) will attempt to infer the type. If inference fails, `any` will be assigned.

```
integer := 4
floating := 3.14
message := "Hello from Vega!"
```


## Nullable Variables
Declared using `maybe`.

If the inferred form is used and type inference fails, `maybe any` will be assigned.

```
maybe optional_int := 4
maybe optional_float float := 3.14
maybe optional_any := nil /* ?any */
```

## Mutable Variables
Declared using `mut`.

Mutations are performed with `<-`.

If the inferred form is used and type inference fails, `mut any` will be assigned.

```
mut mutable_int := 4
mut mutable_float float := 3.14
mut maybe mutable_any := nil

mutable_int <- 5
mutable_float <- 4.14
mutable_any <- "Hi!"
```

<div class="warning">

#### The `mut` modifier must be written before the `maybe`

The reason lies on the lexical logic: 

`mut maybe x := 1` means 

*`x` is a mutable integer that may not have a value.* 

while `maybe mut x := 1` means 

*`x` is maybe a mutable integer.*
</div>
