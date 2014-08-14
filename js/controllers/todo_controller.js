Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    editTask: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeTask');
      } else {
        this.get('model').save();
      }
    },
    removeTask: function() {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  },

  isEditing: false,

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value == undefined) {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
