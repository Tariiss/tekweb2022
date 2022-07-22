## API Points

Berikut adalah entitas yang diperlukan dalam pengembangan aplikasi dari portofolio saya adalah portfolio_users, article, dan keterampilan.

> ### portfolio_user

#### Menampilkan data semua pengguna

```
GET: /portfoliousers

response:
[
    {
        "id"            : "",
        "nama"          : "",
        "motto"         : "",
        "yt_url"        : "",
        "ig_url"        : "",
        "gh_url"        : "",
        "avatar_url"    : ""
    },
    ...
]
```

#### Menampilkan data pengguna dengan `id` tertentu

```
GET: /portfoliousers/[id]

reponse:
{
    "id"            : "",
    "nama"          : "",
    "motto"         : "",
    "yt_url"        : "",
    "ig_url"        : "",
    "gh_url"        : "",
    "avatar_url"    : ""
}
```

#### Menambahkan data pengguna

```
POST: /portfoliousers

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "nama"          : "",
    "motto"         : "",
    "yt_url"        : "",
    "ig_url"        : "",
    "gh_url"        : "",
    "avatar_url"    : ""
}

response:
true    // if success
false   // if failure
```

#### Edit data pengguna

```
PUT: /portfoliousers

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "id"            : "",
    "name"          : "",
    "motto"         : "",
    "ig_url"        : "",
    "fb_url"        : "",
    "gh_url"        : "",
    "yt_url"        : "",
    "avatar_url"    : ""
}

response:
true    // if success
false   // if failure

```

#### Menghapus data anggota

```
DELETE: /portfoliousers/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

response:
true    // if success
false   // if failure
```

> ### article

#### Menampilkan semua article

```
GET: /article

response:
[
    {
        "id"             : "",
        "thumbnail"      : "",
        "title"          : "",
        "content"        : "",
        "author"         : "",
    },
    ...
]
```

#### Menampilkan article dengan `id` tertentu

```
GET: /article/[id]

response:
{
    "id"             : "",
    "thumbnail"      : "",
    "title"          : "",
    "content"        : "",
    "author"         : "",
}
```

#### Membuat article

```
POST: /article

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "thumbnail"      : "",
    "title"          : "",
    "content"        : "",
    "author"         : "",
}

response:
true    // if success
false   // if failure
```

#### Mengubah data pada article

```
PUT: /article

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "id"             : "",
    "thumbnail"      : "",
    "title"          : "",
    "content"        : "",
    "author"         : "",
}

response:
true    // if success
false   // if failure
```

#### Menghapus article

```
DELETE: /article/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

response:
true    // if success
false   // if failure
```

> ### Skill

#### Menampilkan semua Skill

```
GET: /skill

response:
[
    {
        "id"            : "",
        "skill"         : "",
        "kemampuan      : ""
    }
    ...
}
```

#### Menampilkan skill berdasarkan `id`

```
GET: /skill/[id]

response:
{
    "id"            : "",
    "skill"         : "",
    "kemampuan      : ""
}
```

#### Menamabahkan skill

```
POST: /skill

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "skill"         : "",
    "kemampuan      : ""
}

response:
true    // if success
false   // if failure
```

#### Update data skill

```
PUT: /skill

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "id"            : "",
    "skill"         : "",
    "kemampuan      : ""
}

response:
true    // if success
false   // if failure
```

#### Menghapus data skill

```
DELETE: /skill/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

response:
true    // if success
false   // if failure
```

## Desain database

Berikut adalah desain database untuk API yang akan digunakan

```mermaid
classDiagram
    class portfoliouser{
        # id: int
        + nama: string
        + motto: string
        + yt_url: string
        + ig_url: string
        + gh_url: string
        + avatar_url: string
        + getAllUser()
        + getUserById()
        + createUser()
        + updateUser()
        + deleteUser()
    }
    class article{
        # id: int
        + thumbnail_url: string
        + title: string
        + content: string
        + content_url: string
        + author: string
        + getAllArticle()
        + getArticleById()
        + createArticle()
        + updateArticle()
        + deleteArticle()
    }
    class skill{
        # id: int
        + skill: string
        + kemampuan: string
        + getAllSkill()
        + getSkillById()
        + createSkill()
        + updateSkill()
        + deleteSkill()
    }
```
