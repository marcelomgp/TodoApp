Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    clearCompleted: function() {
      var completed = this.filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    },
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
  },
  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  incompleteTasks: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'tarefa pendente' : 'tarefas pendentes';
  }.property('remaining'),

  allAreDone: function(key, value) {
    if (value === undefined) {
      return !!this.get('length') && this.everyProperty('isCompleted', true);
    } else {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted')
});
