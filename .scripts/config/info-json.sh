#!/bin/bash

node -pe "const config = require('./lib/config/'); JSON.stringify(config, null, '  ')"
