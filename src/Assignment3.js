import React, { useState } from 'react';

// Define custom styling using a style object variable
const styles = {
    container: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'centre',
    },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    color:'blue',
    textAlign:'center'
    //marginBottom: '20px',
  },
  appointmentContainer: {
    border: '2px solid black',
    padding: '15px',
    margin: '10px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  patientName: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  completedName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'gray',
    textDecoration: 'line-through',
  },
  reason: {
    fontSize: '15px',
    margin: '5px',
  },
  date: {
    fontSize: '15px',
    color: '#555',
    margin: '5px',
  },
  status: {
    fontSize: '15px',
    //fontWeight: 'bold',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: 'green',//007bff
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  totalCompleted: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '20px',
  },
};

// Appointment component
const Appointment = ({ appointment, onComplete }) => (
  <div style={styles.appointmentContainer}>
    <div style={appointment.status === 'completed' ? styles.completedName : styles.patientName}>
      {appointment.name}
    </div>
    <div style={styles.reason}>Reason: {appointment.reason}</div>
    <div style={styles.date}>Date: {appointment.date}</div>
    <div style={styles.status}>Status: {appointment.status}</div>
    {appointment.status === 'scheduled' && (
      <button style={styles.button} onClick={onComplete}>
        Mark as Completed
      </button>
    )}
  </div>
);

const AppointmentList = () => {
  // Initial appointment data
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', reason: 'Routine Check-up', date: '2024-11-06', status: 'scheduled' },
    { id: 2, name: 'Jane Smith', reason: 'Dental Cleaning', date: '2024-11-07', status: 'scheduled' },
    { id: 3, name: 'Bob Johnson', reason: 'High ever', date: '2024-11-08', status: 'scheduled' },
  ]);

  // Count completed appointments
  const completedCount = appointments.filter((appointment) => appointment.status === 'completed').length;

  // Function to mark an appointment as completed
  const handleComplete = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: 'completed' } : appointment
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Patient Appointments</h1>
      {appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
          onComplete={() => handleComplete(appointment.id)}
        />
      ))}
      <div style={styles.totalCompleted}>Total Completed Appointments: {completedCount}</div>
    </div>
  );
};

export default AppointmentList;
