const UserDTO = {
  create(user) {
    this.validate(user);
    const { name, email, age, city } = user;
    return { name, email, age, city };
  },

  format(user) {
    this.validate(user);
    const { name, email, age, city } = user;
    const formattedName = name.toUpperCase();
    return { name: formattedName, email, age, city };
  },

  calculateAge(user) {
    this.validate(user);
    const { birthdate } = user;
    const currentDate = new Date();
    const userBirthdate = new Date(birthdate);
    const ageDiffMs = currentDate - userBirthdate;
    const ageDate = new Date(ageDiffMs);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    return calculatedAge;
  },

  getInitials(user) {
    this.validate(user);
    const { name } = user;
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part.charAt(0)).join('');
    return initials;
  },

  hasValidEmail(user) {
    this.validate(user);
    const { email } = user;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  },

  validate(user) {
    const { name, email, age, city } = user;

    if (!name || !email || !age || !city) {
      throw new Error('All fields are required');
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof age !== 'number' || Number.isInteger(age) || typeof city !== 'string') {
      throw new Error('Invalid field types');
    }

    if (name.trim().length === 0 || email.trim().length === 0 || city.trim().length === 0) {
      throw new Error('Fields cannot be empty');
    }

    if (name.trim() === '' || email.trim() === '' || age <= 0 || city.trim() === '') {
      throw new Error('Invalid field values');
    }

    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (name.length < 2 || name.length > 50) {
      throw new Error('Name must be between 2 and 50 characters');
    }

    if (age < 18 || age > 100) {
      throw new Error('Age must be between 18 and 100');
    }

    if (city.length < 2 || city.length > 50) {
      throw new Error('City must be between 2 and 50 characters');
    }




    // Agrega más validaciones personalizadas según tus requisitos

    return true;
  },

  isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

};

module.exports = UserDTO;
