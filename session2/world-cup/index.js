#!/usr/bin/env node

const program = require('commander')
const models = require('./models/manage')

program
  .version('1.0.0')
  .description('WORLD CU{ 2018')


program
  .command('refresh')
  .alias('r')
  .description('Get newest data from server.')
  .action(() => {
    models.refreshData()
  })

program
  .command('stadiums')
  .alias('std')
  .description('show stadiums')
  .action(() => {
    models.getStadiums()
  })

program
  .command('tvchannels')
  .alias('tvc')
  .description('show TV Channles')
  .action(() => {
    models.getTvChannels()
  })

program
  .command('teams')
  .alias('gt')
  .description('show teams')
  .action(() => {
    models.getTeams()
  })

program
  .command('group_matches')
  .alias('gm')
  .description('show group matches')
  .action(() => {
    models.getGroupMatch()
  })

program
  .command('match_by_group_name')
  .alias('mbgn')
  .description('show group match by name')
  .action((str, options) => {
    const groupName = options.args[0]
    models.getMatchByGroupName(groupName)
  })

program.parse(process.argv)