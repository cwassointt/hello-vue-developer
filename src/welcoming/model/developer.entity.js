/**
 * Developer entity
 * @description
 * This class represents a developer entity
 * It has a first name and a last name.
 */
export class Developer {
    firstName;
    lastName;

    /**
     * Constructor
     * @param firstName
     * @param lastName
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Get the full name of the developer
     * @returns {string|string}
     */
    get fullName() {
        return this.firstName = null || this.lastName == null ? "Unknown" : `${this.firstName} ${this.lastName}`.trim();
    }
}