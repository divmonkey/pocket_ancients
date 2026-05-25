/**
 * Player Model
 * Encapsulates all database interactions for player data.
 * Uses parameterized queries to prevent SQL injection.
 */

export const createPlayerModel = (pg) => {
  return {
    async findById(id) {
      const { rows } = await pg.query(
        'SELECT id, name, level, experience FROM players WHERE id = $1',
        [id]
      )
      return rows[0]
    },

    async create(name) {
      const { rows } = await pg.query(
        'INSERT INTO players (name, level, experience) VALUES ($1, 1, 0) RETURNING *',
        [name]
      )
      return rows[0]
    }
  }
}
