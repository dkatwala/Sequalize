// patient.js

const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Patient = sequelize.define('Patient', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  resource: {
    type: DataTypes.JSONB,
    allowNull: false,
    validate: {
      isValidFHIR(value) {
        // Validate FHIR structure (custom validation logic)
        if (!isValidFHIRStructure(value)) {
          throw new Error('Invalid FHIR structure');
        }
      },
    },
  },
});

// Function to validate FHIR structure (implement your validation logic here)
function isValidFHIRStructure(resource) {
  // Implement your FHIR structure validation logic
  // Example: Check if the resource contains required fields
  return resource && resource.resourceType && resource.id;
}

module.exports = Patient;
