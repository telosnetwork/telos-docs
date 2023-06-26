---
title: Login
sidebar_position: 2
---


# Login

## Login a User

To login, send a `loginuser` action to the `telos.login` account.

### ACTION `loginuser`

| Parameter Name | Type | Example | Description |
| :--- | :--- | :--- | :--- |
| account\_name | name | testaccount1 | The name of the Telos account to log in. |
| login\_code | string | "abc123xyz" | A server-side generated code to associate with the login. |

{% tabs %}
{% tab title="Cleos" %}
```text
cleos push action telos.login loginuser '{ ... }' -p user
```
{% endtab %}

{% tab title="eosjs" %}
```

```
{% endtab %}
{% endtabs %}



