const express = require('express');
const router = express.Router();
const Authservice = require('../service/service');

router.get('/user',async (req, res) => {
    try {
        const users = await Authservice.find({});
        res.status(200).json({
            success: true,
            data: users,
            message: 'Users found successfully'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

router.post('/user',async (req,res) => {
    try {
        const { student_name, roll_No, mob_No, address } = req.body;
        await Authservice.save(student_name, roll_No, mob_No, address);
        res.status(201).json({
            success: true,
            message: 'User registered successfully'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

router.delete('/user/:id', async (req, res) => {
    try {
        const result = await Authservice.delete(req.params.id);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'User deleted successfully'
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

router.put('/user/:id', async (req, res) => {
    try {
        const result = await Authservice.update(req.params.id, req.body);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'User updated successfully'
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

module.exports = router;
