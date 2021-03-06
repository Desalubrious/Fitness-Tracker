const db = require('../models');

module.exports = function(app) {
    // Pull up info for workouts
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.send(dbWorkout);
        })
        .catch(err => {
            res.send(err)
        });
    });

    // Get range
    app.get('/api/workouts/range',({}, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.send(err)
        });
    });

    // submits a new workout
    app.post('/api/workouts', (req, res) => {
        db.Workout.create(req.body).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.send(err)
        });
    });


    // Send workout info
    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findByIdAndUpdate({_id: req.params.id},{ exercises: req.body}).then(dbWorkout => {
            res.json(dbWorkout);
        }
        )
        .catch(err => {
            res.send(err)
        }
        );
    });
};






