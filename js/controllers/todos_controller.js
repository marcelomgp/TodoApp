Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTask: function() {
      var name = this.get('newName');
      if (!name) { return false; }
      if (!name.trim()) { return; }

      var task = this.store.createRecord('todo', {
        name: name,
        isCompleted: false
      });

      this.set('newName', '');

      task.save();
    }
  }
});
