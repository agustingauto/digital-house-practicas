select last_name 
from actors
order by id desc
limit 1;
-- gun

select substring(title,1,6)
from movies
limit 1
offset 4;
-- parque

select length
from movies
where title = 'Titanic';
-- 320

select genre_id
from series
where id in (
	select id
    from series
    where title = 'Person of interest');
    /*preguntar aca a ale si esto es la subquery*/
    -- 4

select season_id
from episodes
where number = 2;
-- 46

---------------------------

select substring(title,3,5)
from movies
where release_date between '1999-10-01 00:00:00' and '2004-12-01 00:00:00'
limit 1
offset 2;
-- rey

select substring(title, 1, 5)
from movies
where right(title,1) = 'a'
limit 1
offset 2;
-- Hotel

select count(id)
from actors
where first_name = 'Jim';
-- 3

select sum(awards)
from movies
where title like '%La Guerra de las Galaxias%';
-- 13

select substring(movies.title,10,3)
from movies
inner join actors
on movies.id = actors.favorite_movie_id
where actors.last_name = 'Di Caprio';
-- de

--------------------------

select actors.favorite_movie_id, actors.id, actors.last_name, actors.rating, movies.title
from actors
inner join movies
on actors.favorite_movie_id = movies.id
where actors.rating = 2.3
order by actors.id;
-- me devuelve 'buscando', creo que sería 'titanic'

select series.title, genres.name
from series
inner join genres
on series.genre_id = genres.id;
-- me devuelve comedia y tendria que ser fantasia

select movies.title
from movies
inner join genres
on movies.genre_id = genres.id
where genres.name = 'Animación'
order by movies.id desc
limit 1;
-- intensamente

select actors.last_name
from actors
inner join actor_movie
on actors.id = actor_movie.actor_id
inner join movies
on movies.id = actor_movie.movie_id
where movies.title = 'Parque Jurásico'
limit 1
offset 1;
-- Dern

select movies.title, genres.name, genres.ranking
from movies
inner join genres
on movies.genre_id = genres.id
where genres.ranking between 1 and 4;
-- mi (Mi pobre angelito)

-----------------------

select genres.name, avg(movies.length) as promedio_duracion
from movies
inner join genres
on movies.genre_id = genres.id
group by genres.name
order by promedio_duracion asc
limit 1;
-- infantiles

select actors.first_name, actors.last_name, count(actor_movie.movie_id) as total_peliculas
from actors
inner join actor_movie
on actors.id = actor_movie.actor_id
inner join movies
on movies.id = actor_movie.movie_id
group by actors.id
order by total_peliculas desc;
-- emma

select count(movies.title) as cantidad, genres.name
from movies
inner join genres
on movies.genre_id = genres.id
group by genres.name
order by cantidad desc
limit 1
-- 5

/*ME FALTAN LOS ULTIMOS DOS EJERCICIOS DEL DESAFIO 4 MAS EJERCITACION CONSULTAS SQL*/






