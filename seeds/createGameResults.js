/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('game_results').del()
  await knex('game_results').insert([
    {id: 1, winner_id: 1,  loser_id: 2},
    {id: 2, winner_id: 3,  loser_id: 4},
  ]);
};
