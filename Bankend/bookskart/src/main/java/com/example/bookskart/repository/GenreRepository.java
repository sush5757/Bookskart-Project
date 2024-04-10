package com.example.bookskart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookskart.model.Genre;


@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

}
