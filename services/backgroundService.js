const mongoose = require('mongoose');
const utils = require('../utils/utils');
const Promise = require('bluebird');

// const Background = mongoose.model('Background');
const { ObjectId } = mongoose.Types;

class BackgroundService {

  static getAll() {
    return Promise.resolve([]);
  }

  // static getPagination(state, user) {
  //   let match = {};
  //   if (user.role === 'admin') {
  //     match = {
  //       $match: {
  //         $and: [{}],
  //       },
  //     };
  //   } else {
  //     match = {
  //       $match: {
  //         $and: [{
  //           owner: ObjectId(user.id),
  //         }],
  //       },
  //     };
  //   }
  //   if (state.searchText) {
  //     match.$match.$and.push({
  //       $or: [
  //         {
  //           username: {
  //             $regex: new RegExp(`.*${state.searchText}.*`),
  //           },
  //           email: {
  //             $regex: new RegExp(`.*${state.searchText}.*`),
  //           },
  //         },
  //       ],
  //     });
  //   }
  //   const project = {
  //     $project: {
  //       id: '$_id',
  //       username: 1,
  //       email: 1,
  //       role: 1,
  //       createdAt: 1,
  //       updatedAt: 1,
  //     },
  //   };

  //   const skip = {
  //     $skip: utils.getSkipOptions(state),
  //   };
  //   const limit = {
  //     $limit: utils.getLimitOptions(state),
  //   };
  //   const sort = {
  //     $sort: utils.getSortOptions(state),
  //   };

  //   const count = {
  //     $count: 'count',
  //   };

  //   const countAllAggregate = [match, count];
  //   const aggregate = [match, project, sort, skip, limit];

  //   return Background.aggregate(aggregate)
  //     .then(countAll => Background.aggregate(countAllAggregate)
  //       .then(datasets => ({
  //         rows: datasets,
  //         total: countAll.length > 0 ? countAll[0].count : 0,
  //       })))
  //     .catch((err) => {
  //       logger.error(err);
  //     });
  // }
}

module.exports = BackgroundService;
