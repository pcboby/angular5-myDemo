import { Component, OnInit } from '@angular/core';
import { TablesData } from '../../../../../api/tables-data';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {


  /**
   * Table checkbox
   */

  public checkAll: Boolean;
  public checkItems: Object = {
  };

  /**
   * source
   */
  public rows: Array < any > = [];
  public columns: Array < any > = [{
      title: 'Name',
      name: 'name',
      filtering: {
        filterString: '',
        placeholder: 'Filter by name'
      }
    },
    {
      title: 'Position',
      name: 'position',
      sort: false,
      filtering: {
        filterString: '',
        placeholder: 'Filter by position'
      }
    },
    {
      title: 'Office',
      className: ['office-header', 'text-success'],
      name: 'office',
      sort: 'asc'
    },
    {
      title: 'Extn.',
      name: 'ext',
      sort: '',
      filtering: {
        filterString: '',
        placeholder: 'Filter by extn.'
      }
    },
    {
      title: 'Start date',
      className: 'text-warning',
      name: 'startDate'
    },
    {
      title: 'Salary ($)',
      name: 'salary'
    }
  ];
  public page = 1;
  public itemsPerPage = 3;
  public maxSize = 5;
  public numPages = 1;
  public length = 0;

  public config: any = {
    paging: true,
    sorting: {
      columns: this.columns
    },
    filtering: {
      filterString: ''
    },
    className: ['table-striped', 'table-bordered']
  };

  private data: Array < any > = this.dataFormatter(TablesData);

  public constructor() {
    this.length = this.data.length;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  public dataFormatter(data: Array < any > = this.data): Array < any > {
    data.forEach(function (el, ids) {
      el.ids = ids;
    });
    return data;
  }
  public doCheckAll(): void {
    if (this.checkAll) {

      for (let i = 0; i < this.length; i++) {
        this.checkItems[i + ''] = true;
      }
    } else {
      this.checkItems = {};
    }
  }
  public doCheckItem(): void {
    let flag: Boolean = true;
    let s = 0;
    // tslint:disable-next-line:forin
    for (const i in this.checkItems) {
      if (!this.checkItems[i]) {
        flag = false;
        continue;
      }
      s++;
    }
    if (s < this.length) {
      flag = false;
    }
    this.checkAll = flag;
  }
  public changePage(page: any, data: Array < any > = this.data): Array < any > {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array < any > = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: Array < any > = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = {
    page: this.page,
    itemsPerPage: this.itemsPerPage
  }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }

}
