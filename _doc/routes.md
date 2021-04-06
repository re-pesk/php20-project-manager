# Vartotojo duomenys: keliai ir metodai

Keliai ir metodai
| Metodas   | endpointas            | vardas        | UserController | Paskirtis         | rolė                |
|           |                       |               | metodas        |                   |                     |
|-----------|-----------------------|---------------|----------------|-------------------|---------------------|
| GET|HEAD  | api/users             | users.index   | index          | sąrašas           | adminas             |
| POST      | api/users             | users.store   | store          | vartotojo kūrimas | adminas, svečias    |
| GET|HEAD  | api/users/create      | users.create  | create         | kūrimo forma      | reikalinga tik web? |
| GET|HEAD  | api/users/{user}      | users.show    | show           | duomenų rodymas   | adminas, vartotojas |
| PUT|PATCH | api/users/{user}      | users.update  | update         | atnaujinimas      | adminas, vartotojas |
| DELETE    | api/users/{user}      | users.destroy | destroy        | trynimas          | adminas, vartotojas |
| GET|HEAD  | api/users/{user}/edit | users.edit    | edit           | redagavimo forma  | reikalinga tik web? |


 

Pastabos:
ne visos funkcijos būtinai turi būti sukurtos:

kai kurie endpointai turi prasmę tik web routuose, nes jų tikslas - pateikti redagavimo formas.
 
- GET/api/users/create - API backende nereikalingas, nes formos oš backendo nereikia, o duomenys į backendą gali būti siunčiami per POST/api/users
- GET/api/users/{user}/edit - API backende nereikalingas, duomenis galima paimti ir per GET/api/users/{user}, duomenys į backendą siunčiami per PUT/api/users/{user}

Tačiau šie keliai gali būti naudojami frontende!
