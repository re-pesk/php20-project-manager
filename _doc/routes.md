# Vartotojo duomenys: keliai ir metodai

Keliai ir metodai

| Metodas   | kelias                | Vardas        | Akcija                    | Paskirtis              | Rolės |
|-----------|-----------------------|---------------|---------------------------|------------------------|-------|
| POST      | api/login             |               | AuthController@login      | prisijungimas          | g     |
| POST      | api/logout            |               | AuthController@logout     | atsijungimas           | u     |
| POST      | api/register          |               | AuthController@register   | registracija           | g     |
| GET/HEAD  | api/users             | users.index   | UserController@index      | vartotojų sąrašas      | a     |
| POST      | api/users             | users.store   | UserController@store      | vartotojų kūrimas      | a     |
| GET/HEAD  | api/users/{user}      | users.show    | UserController@show       | vartotojo duomenys     | au    |
| PUT/PATCH | api/users/{user}      | users.update  | UserController@update     | vartotojo atnaujinimas | au    |
| DELETE    | api/users/{user}      | users.destroy | UserController@destroy    | vartotojo trynimas     | au    |
| GET/HEAD  | api/users/create      | users.create  | UserController@create     | kūrimo forma?          | n?    |
| GET/HEAD  | api/users/{user}/edit | users.edit    | UserController@edit       | redagavimo forma?      | n?    |
| GET/HEAD  | api/materials         |               | Closure                   | bandymas               | g     |
| GET/HEAD  | sanctum/csrf-cookie   |               | CsrfCookieController@show | web                    |       |

Pastabos:\
a - adminas\
u - vartotojas\
g - svečias\
n - nereikalingas

ne visos funkcijos būtinai turi būti sukurtos:

kai kurie endpointai turi prasmę tik web routuose, nes jų tikslas - pateikti redagavimo formas.

- GET/api/users/create - API backende nereikalingas, nes formos oš backendo nereikia, o duomenys į backendą gali būti siunčiami per POST/api/users
- GET/api/users/{user}/edit - API backende nereikalingas, duomenis galima paimti ir per GET/api/users/{user}, duomenys į backendą siunčiami per PUT/api/users/{user}

Tačiau šie keliai gali būti naudojami frontende!
