package com.salma.login.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.salma.login.models.User;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);


}
