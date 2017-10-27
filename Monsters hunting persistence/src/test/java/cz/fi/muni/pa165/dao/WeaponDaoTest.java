package cz.fi.muni.pa165.dao;

import cz.fi.muni.pa165.PersistenceApplicationContext;
import cz.fi.muni.pa165.entity.Monster;
import cz.fi.muni.pa165.entity.Weapon;
import cz.fi.muni.pa165.enums.WeaponType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.transaction.annotation.Transactional;
import org.testng.annotations.Test;

import javax.inject.Inject;

import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;


@ContextConfiguration(classes=PersistenceApplicationContext.class)
@TestExecutionListeners(TransactionalTestExecutionListener.class)
@Transactional
public class WeaponDaoTest extends AbstractTestNGSpringContextTests {

	@Inject
	private WeaponDao weaponDao;

	@Inject
	private MonsterDao monsterDao;

	@Test
	public void testCreateWithNull() {
		assertThatExceptionOfType(IllegalArgumentException.class)
				.isThrownBy(() -> weaponDao.create(null));
	}


	@Test
	public void testCreate() {
		Weapon pistol = createPistol();
		Weapon foundWeapon = weaponDao.findById(pistol.getId());
		assertThat(foundWeapon).isEqualToComparingFieldByField(pistol);
	}

	@Test
	public void testRemoveWithNull() {
		assertThatExceptionOfType(IllegalArgumentException.class)
				.isThrownBy(() -> weaponDao.delete(null));
	}

	@Test
	public void testDelete() {
		Weapon rifle = createRifle();

		weaponDao.delete(rifle);

		Weapon foundWeapon = weaponDao.findById(rifle.getId());
		assertThat(foundWeapon).isEqualTo(null);
	}

	@Test
	public void testGetByIdWithNull() {
		assertThatExceptionOfType(IllegalArgumentException.class)
				.isThrownBy(() -> weaponDao.delete(null));
	}

	@Test
	public void testGetById() {
		Weapon rifle = createRifle();

		Weapon foundWeapon = weaponDao.findById(rifle.getId());

		assertThat(foundWeapon).isEqualToComparingFieldByField(rifle);
	}

	@Test
	public void testGetByIdNothingFound() {
		Weapon foundWeapon = weaponDao.findById(1L);
		assertThat(foundWeapon).isEqualTo(null);
	}

	@Test
	public void testGetByNameWithNull() {
		assertThatExceptionOfType(IllegalArgumentException.class)
				.isThrownBy(() -> weaponDao.findByName(null));
	}

	@Test
	public void testGetByNameWithEmptyValue() {
		assertThatExceptionOfType(IllegalArgumentException.class)
				.isThrownBy(() -> weaponDao.findByName(""));
	}

	@Test
	public void testGetByName() {
		Weapon rifle = createRifle();

		Weapon foundWeapon = weaponDao.findByName(rifle.getName());

		assertThat(foundWeapon).isEqualToComparingFieldByField(rifle);
	}

	@Test
	public void testGetByNameNothingFound() {
		Weapon foundWeapon = weaponDao.findByName("Rifle");
		assertThat(foundWeapon).isEqualTo(null);
	}

	@Test
	public void testGetAllForTypeWithNull() {
		assertThatExceptionOfType(IllegalArgumentException.class)
				.isThrownBy(() -> weaponDao.getAllForType(null));
	}

	@Test
	public void testGetAllForType() {
		Weapon rifle = createRifle();

		createPistol();

		List<Weapon> foundWeapons = weaponDao.getAllForType(WeaponType.RIFLE);

		assertThat(foundWeapons).containsExactly(rifle);
	}

	@Test
	public void testGetAllForTypeNothingFound() {
		createPistol();

		List<Weapon> foundWeapons = weaponDao.getAllForType(WeaponType.RIFLE);

		assertThat(foundWeapons).isEmpty();
	}

	@Test
	public void testGetAll() {
		Weapon rifle = createRifle();
		Weapon pistol = createPistol();

		List<Weapon> foundWeapons = weaponDao.getAll();

		assertThat(foundWeapons).containsExactly(rifle, pistol);
	}

	@Test
	public void testGetAllNothingFound() {
		List<Weapon> foundWeapons = weaponDao.getAll();
		assertThat(foundWeapons).isEmpty();
	}

	@Test
	public void testManyToManyRelationWithMonster() {
		Weapon rifle = createRifle();
		Monster zombie = new Monster("Zombie");

		rifle.addAppropriateMonster(zombie);

		monsterDao.create(zombie);

		Set<Weapon> weaponsForZombie = zombie.getAppropriateWeapons();

		assertThat(weaponsForZombie).contains(rifle);
	}

	private Weapon createRifle() {
		Weapon rifle = new Weapon("Rifle");
		rifle.setType(WeaponType.RIFLE);
		rifle.setMagazineCapacity(40);
		rifle.setRange(250);
		weaponDao.create(rifle);
		return rifle;
	}

	private Weapon createPistol() {
		Weapon pistol = new Weapon("Pistol");
		pistol.setType(WeaponType.PISTOL);
		pistol.setMagazineCapacity(10);
		pistol.setRange(50);
		weaponDao.create(pistol);
		return pistol;
	}
}
