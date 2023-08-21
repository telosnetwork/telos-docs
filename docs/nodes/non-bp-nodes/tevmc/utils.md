<!-- markdownlint-disable -->


# <kbd>module</kbd> `utils`




**Global Variables**
---------------
- **bytes_types**
- **integer_types**
- **text_types**
- **string_types**
- **units**
- **MIN_WEI**
- **MAX_WEI**

---


## <kbd>function</kbd> `is_integer`

```python
is_integer(value: Any) → bool
```






---


## <kbd>function</kbd> `is_bytes`

```python
is_bytes(value: Any) → bool
```






---


## <kbd>function</kbd> `is_text`

```python
is_text(value: Any) → bool
```






---


## <kbd>function</kbd> `is_string`

```python
is_string(value: Any) → bool
```






---


## <kbd>function</kbd> `is_boolean`

```python
is_boolean(value: Any) → bool
```






---


## <kbd>function</kbd> `is_dict`

```python
is_dict(obj: Any) → bool
```






---


## <kbd>function</kbd> `is_list_like`

```python
is_list_like(obj: Any) → bool
```






---


## <kbd>function</kbd> `is_list`

```python
is_list(obj: Any) → bool
```






---


## <kbd>function</kbd> `is_tuple`

```python
is_tuple(obj: Any) → bool
```






---


## <kbd>function</kbd> `is_null`

```python
is_null(obj: Any) → bool
```






---


## <kbd>function</kbd> `is_number`

```python
is_number(obj: Any) → bool
```






---


## <kbd>function</kbd> `from_wei`

```python
from_wei(number: int, unit: str) → Union[int, Decimal]
```

Takes a number of wei and converts it to any other ether unit. 


---


## <kbd>function</kbd> `to_wei`

```python
to_wei(number: Union[int, float, str, Decimal], unit: str) → int
```

Takes a number of a unit and converts it to wei. 


---


## <kbd>function</kbd> `to_int`

```python
to_int(
    primitive: Union[bytes, int, bool] = None,
    hexstr: HexStr = None,
    text: str = None
) → int
```

Converts value to its integer representation. Values are converted this way: * primitive:  * bytes, bytearrays: big-endian integer  * bool: True => 1, False => 0 * hexstr: interpret hex as integer * text: interpret as string of digits, like '12' => 12 


---


## <kbd>function</kbd> `decode_hex`

```python
decode_hex(value: str) → bytes
```






---


## <kbd>function</kbd> `encode_hex`

```python
encode_hex(value: ~AnyStr) → HexStr
```






---


## <kbd>function</kbd> `is_0x_prefixed`

```python
is_0x_prefixed(value: str) → bool
```






---


## <kbd>function</kbd> `remove_0x_prefix`

```python
remove_0x_prefix(value: HexStr) → HexStr
```






---


## <kbd>function</kbd> `add_0x_prefix`

```python
add_0x_prefix(value: HexStr) → HexStr
```






---


## <kbd>function</kbd> `is_hexstr`

```python
is_hexstr(value: Any) → bool
```






---


## <kbd>function</kbd> `is_hex`

```python
is_hex(value: Any) → bool
```






---


## <kbd>function</kbd> `docker_stream_logs`

```python
docker_stream_logs(container, timeout=30.0, from_latest=False)
```

Streams logs from a running Docker container. 



**Args:**
 
 - <b>`container`</b> (container):  Docker container object. 
 - <b>`timeout`</b> (float, optional):  Time to wait between log messages. Default to 30.0 seconds. 
 - <b>`from_latest`</b> (bool, optional):  Only fetch logs since the last log. Default to False. 



**Yields:**
 
 - <b>`str`</b>:  The log messages. 



**Raises:**
 
 - <b>`DockerException`</b>:  If the container is not running. 
 - <b>`StopIteration`</b>:  If no logs are received within the timeout period. 


---


## <kbd>class</kbd> `denoms`










---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._
