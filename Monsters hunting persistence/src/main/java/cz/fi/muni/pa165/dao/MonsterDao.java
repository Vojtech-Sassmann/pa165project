package cz.fi.muni.pa165.dao;

import cz.fi.muni.pa165.entity.Monster;

import java.util.List;

/**
 * Data access object class for {@link Monster} entity
 *
 * @author Vojtech Sassmann &lt;vojtech.sassmann@gmail.com&gt;
 */
public interface MonsterDao {

	/**
	 * Persists the given Monster to DB.
	 *
	 * @param monster entity to be persisted
	 */
	void create(Monster monster);

	/**
	 * Removes the given Monster from DB.
	 *
	 * @param monster entity to be removed from DB
	 */
	void delete(Monster monster);

	/**
	 * Finds Monster entity in DB by given id.
	 *
	 * @param id id of searched Entity
	 * @return Found Monster or null if it was not found
	 */
	Monster findById(Long id);

	/**
	 * Returns all Monster entities from DB.
	 *
	 * @return List of all Monster entities
	 */
	List<Monster> getAll();
}
