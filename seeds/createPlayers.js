/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    {id: 1, player_name: 'John', player_email: 'John@mail.ru'},
    {id: 2, player_name: 'Mark', player_email: 'Mark@mail.ru'},
    {id: 3, player_name: 'Alice', player_email: 'Alice@mail.ru'},
    {id: 4, player_name: 'Pete', player_email: 'Pete@mail.ru'},
  ]);
};
