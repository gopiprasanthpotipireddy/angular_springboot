package com.example.todo.repositories;

import com.example.todo.models.ToDo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface todoRepository extends MongoRepository<ToDo,String> {

}
