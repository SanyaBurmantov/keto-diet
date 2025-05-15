import React from 'react';
import {Link} from "react-router-dom";

const Breakfests = () => {
    return (
        <div>
            <div className="">
                <div className="week">
                    <h2>Кето-завтраки на неделю</h2>
                    <div className="tips">
                        <h3>💡 Советы по кето-завтракам</h3>
                        <ul>
                            <li>Готовьте яйца на сливочном или кокосовом масле для увеличения жирности</li>
                            <li>Добавляйте MCT-масло в напитки для быстрого получения энергии</li>
                            <li>Сочетайте белок с полезными жирами в каждом приеме пищи</li>
                            <li>При отсутствии времени - используйте кето-протеиновые коктейли</li>
                        </ul>
                    </div>
                    <div className="day">
                        <h3><span className="emoji">🍳</span> Понедельник</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Яичница с беконом и шпинатом</div>
                        <div className="meal"><span className="meal-title">Дополнительно:</span> Авокадо с оливковым маслом</div>
                        <div className="meal"><span className="meal-title">Напиток:</span> Буллетпруф кофе (кофе + масло MCT + сливки)</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🥑</span> Вторник</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Омлет с грибами и сыром чеддер</div>
                        <div className="meal"><span className="meal-title">Дополнительно:</span> Орехи макадамия (30г)</div>
                        <div className="meal"><span className="meal-title">Напиток:</span> Зеленый чай со сливками</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🧀</span> Среда</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Сырники из миндальной муки со сметаной</div>
                        <div className="meal"><span className="meal-title">Дополнительно:</span> Кокосовые чипсы</div>
                        <div className="meal"><span className="meal-title">Напиток:</span> Какао на кокосовом молоке</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🥓</span> Четверг</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Яйца пашот с лососем</div>
                        <div className="meal"><span className="meal-title">Дополнительно:</span> Салат из огурцов со сметаной</div>
                        <div className="meal"><span className="meal-title">Напиток:</span> Травяной чай с кокосовым маслом</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🍄</span> Пятница</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Грибы, запеченные со сливками и сыром</div>
                        <div className="meal"><span className="meal-title">Дополнительно:</span> Ветчина из индейки</div>
                        <div className="meal"><span className="meal-title">Напиток:</span> Кофе с корицей и сливками</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🥚</span> Суббота</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Яйца-скрэмбл с трюфельным маслом</div>
                        <div className="meal"><span className="meal-title">Дополнительно:</span> Салат из рукколы с пармезаном</div>
                        <div className="meal"><span className="meal-title">Напиток:</span> Мятный чай с маслом гхи</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🥞</span> Воскресенье</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Кето-блины из сыра и яиц</div>
                        <div className="meal"><span className="meal-title">Дополнительно:</span> Ягоды (малина/ежевика 50г)</div>
                        <div className="meal"><span className="meal-title">Напиток:</span> Латте с миндальным молоком</div>
                    </div>
                </div>

                <div className="week">
                    <h2>Бюджетные кето-завтраки</h2>

                    <div className="day">
                        <h3><span className="emoji">🍳</span> Понедельник</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Яичница на сливочном масле (3 яйца)</div>
                        <div className="meal"><span className="meal-title">Добавка:</span> Консервированные шпроты в масле</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🥓</span> Вторник</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Омлет с куриной печенью</div>
                        <div className="meal"><span className="meal-title">Добавка:</span> Сметана 20%</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🧀</span> Среда</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Творог 9% со сметаной</div>
                        <div className="meal"><span className="meal-title">Добавка:</span> Семена подсолнечника</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🥚</span> Четверг</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Вареные яйца (3 шт) с майонезом</div>
                        <div className="meal"><span className="meal-title">Добавка:</span> Консервированные сардины</div>
                    </div>

                    <div className="day">
                        <h3><span className="emoji">🍖</span> Пятница</h3>
                        <div className="meal"><span className="meal-title">Основное:</span> Жареная свиная грудинка</div>
                        <div className="meal"><span className="meal-title">Добавка:</span> Свежий огурец</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breakfests;