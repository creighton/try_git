# Ants
| Method | Path | Response   |
| :------: | :--:   | :----------:    |
|  [GET](#get)  |  /api/v1/ants | [AntList](#ant-list)      |  


## Data Model

### Ant
| Property | Type   | Description     | Required |
| :------: | :--:   | :----------:    |  :--:    |
| queen    | ID     |  the queen's ID | yes |
| color    | String | 


### Ant List
| Property | Type   | Description     | Required |
| :------: | :--:   | :----------:    |  :--:    |
| ants    | \[[Ant](#ant)\]     |  An Array of Ant types | yes |


## Requests
### GET
Get a list of ants

