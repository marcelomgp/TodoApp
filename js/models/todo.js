Todos.Todo = DS.Model.extend({
  name: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    name: 'Aprender Ember.js',
    isCompleted: true
  },
  {
    id: 2,
    name: 'Tomar café...',
    isCompleted: true
  },
  {
    id: 3,
    name: 'Conseguir proeficiência!',
    isCompleted: false
  },
  {
    id: 4,
    name: 'Partir para o Payroll',
    isCompleted: false
  }
];
