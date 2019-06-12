package com.example.todo.controllers;


	import javax.validation.Valid;
	import com.example.todo.models.ToDo;
	import com.example.todo.repositories.todoRepository;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.data.domain.Sort;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.*;
	import java.util.List;
	
	@RestController
	@RequestMapping("/api")
	@CrossOrigin("*")
	public class TodoController {
		@Autowired
	    todoRepository todorepository;
		
		@GetMapping("/todos")
	    public List<ToDo> getAllTodos() {
	        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
	        return todorepository.findAll(sortByCreatedAtDesc);
	    }

	    @PostMapping("/todos")
	    public ToDo createTodo(@Valid @RequestBody ToDo todo) {
	        todo.setCompleted(false);
	        return todorepository.save(todo);
	    }

	    @GetMapping(value="/todos/{id}")
	    public ResponseEntity<ToDo> getTodoById(@PathVariable("id") String id) {
	        return todorepository.findById(id)
	                .map(todo -> ResponseEntity.ok().body(todo))
	                .orElse(ResponseEntity.notFound().build());
	    }

	    @PutMapping(value="/todos/{id}")
	    public ResponseEntity<ToDo> updateTodo(@PathVariable("id") String id,
	                                           @Valid @RequestBody ToDo todo) {
	        return todorepository.findById(id)
	                .map(todoData -> {
	                    todoData.setTitle(todo.getTitle());
	                    todoData.setCompleted(todo.getCompleted());
	                    ToDo updatedTodo = todorepository.save(todoData);
	                    return ResponseEntity.ok().body(updatedTodo);
	                }).orElse(ResponseEntity.notFound().build());
	    }

	    @DeleteMapping(value="/todos/{id}")
	    public ResponseEntity<?> deleteTodo(@PathVariable("id") String id) {
	        return todorepository.findById(id)
	                .map(todo -> {
	                    todorepository.deleteById(id);
	                    return ResponseEntity.ok().build();
	                }).orElse(ResponseEntity.notFound().build());
	    }
		
}
