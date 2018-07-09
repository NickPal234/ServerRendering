import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  musicAuthorList: any = [];
  musicList: any = [];
  displayMusicList: any = [];
  detailsProduct: any;
  userExist: boolean = true;
  accountData: any;
  accountList: any[] = [];
  isUserLogedIn: boolean = false;
  musicListExist: boolean = false;
  accountExist: boolean = true;
  musicDetailsExist: boolean = false;
  selectedAuthor: string = 'All';


  ngOnInit(): void {
    this.musicAuthorList = (window as any).TRANSFER_CACHE.fromDotnet.authors;
    this.musicList = (window as any).TRANSFER_CACHE.fromDotnet.products;
    this.displayMusicList = (window as any).TRANSFER_CACHE.fromDotnet.products;  
  }

  changeForm() {
    this.userExist = !this.userExist;
  }

  registration(userData: NgForm) {
    if (userData.invalid) {
      return;
    }
    this.accountList.push({ name: userData.value.name, password: userData.value.password });
    this.changeForm();
    console.log(userData);
  }

  async login(userData: NgForm): Promise<void> {
    if (userData.invalid) {
      return;
    }
    this.accountData = this.accountList.filter(x => x.name == userData.value.name && x.password == userData.value.password)[0];
    if (this.accountData == null) {
      return;
    }
    this.accountExist = false;
    this.musicListExist = true;
    this.accountData = userData;
    console.log(userData);
  }

  filterMusic(authorName: string): void {
    if (!authorName) {
      this.displayMusicList = this.musicList;
      this.selectedAuthor = 'All';
    } else {
      this.displayMusicList = this.musicList.filter(hero => hero.author === authorName);
      this.selectedAuthor = this.musicAuthorList.filter(heroCompany => heroCompany === authorName)[0].name;
    }
  }

  detailsMusic(data: any): void {
    this.musicListExist = !this.musicListExist;
    this.musicDetailsExist = !this.musicDetailsExist;
    this.detailsProduct = data;

  }

}