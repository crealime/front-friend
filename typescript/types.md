## Types

Number
```typescript
const revenue: number = 1000
const bonus: number = 500

const sum: number = revenue + bonus
```

Function
```typescript
function getFullName (userEntity: { firstName: string, surName: string }): string {
	return `${userEntity.firstName} ${userEntity.surName}`
}
// Or
const getFullNameArrow = (firstName: string, surName: string): string => {
	return `${firstName} ${surName}`
}

const user = {
	firstName: 'Serhii',
	surName: 'Somersby',
	age: 23,
	happy: true
}

console.log(getFullName(user))
```

Object
```typescript
const info: {
	officeId: number
	isOpened: boolean,
	contacts: {
		phone: string,
		email: string,
		address: {
			city: string
		}
	}
} = {
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+155500000000",
		"email": "some@email.com",
		"address": {
			"city": "New York"
		}
	}
}
```

Array
```typescript

```











---
[Home](../README.md) > [Typescript](typescript.md)
