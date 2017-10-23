package cz.fi.muni.pa165.dao;

import cz.fi.muni.pa165.entity.Monster;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;


@Repository
public class MonsterDaoImpl implements MonsterDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	public void create(Monster monster) {
		em.persist(monster);
	}

	@Override
	public void delete(Monster monster) {
		em.remove(monster);
	}

	@Override
	public Monster findById(Long id) {
		try {
			return em.createQuery("select m from Monster m where m.id = :monsterId", Monster.class)
									 .setParameter("monsterId", id)
									 .getSingleResult();
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}

	@Override
	public List<Monster> getAll() {
		return em.createQuery("select m from Monster m", Monster.class)
					   .getResultList();
	}
}
