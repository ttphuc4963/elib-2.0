export const Query = {
  FILTER: { Total: 'total', PublishYear: 'publishYear', Tag: 'tagName' },
  ORDER_BY: {
    Name: 'bookName',
    PublishYear: 'publishYear',
    BorrowCount: 'borrowedTimed',
    StartTime: 'starttime',
    EndTime: 'endtime',
    ReturnedTime:'returnedTime',
    Overdue: 'isOverdue',
    ExtendTime: 'extendTime',
    UserType: 'type',
    UserStatus: 'status',
    NumberOfBuying: 'numberOfBuying',
    BuyingStatus: 'status',
    BuyingUserId: 'readerUniID',
    ScheduledDate: 'scheduledDate',
    BookEdition: 'edition',
    BookPublishYear: 'publishYear',
    BookTotal: 'total',
    TagTotalBook: 'totalBooks',
    NotificationDateSent: 'createdDate',
    NotificationWhoSent: 'readerUniID',
    AnalysisBorrows: 'totalBorrowedTime',
    AnalysisUserBorrows: 'totalUserBorrow'
  },
  ORDER_TYPE: { ASC: 'asc', DESC: 'desc' }
}

export const Default = {
  PAGE: 1,
  LIMIT: 10
}
